import { Utilities } from './Utilities';
import nonceManager from './NounceManager';
import { HttpClient } from '../Connection/HttpClient';
import { DefaultSettings } from '../Model/DefaultSettings';
import { HttpMethod } from '../Enum/HttpMethod';
import { JsonConvert } from 'json2typescript';
import * as Model from '../Model';
import { Observable, throwError as observableThrowError } from 'rxjs';

export class TransportManager {
	private transportOptions;
	private jsc: JsonConvert;

	constructor(private config: DefaultSettings, private http: HttpClient) {
		this.jsc = new JsonConvert();
		this.transportOptions = {
			method: 'GET',
			agent: false,
			headers: {},
		};
	}

	public publicRequest(
		httpMethod: HttpMethod,
		url: string,
		requestOptions: any = {},
		useCredentials: boolean = false
	): Observable<Model.ApiResponse> {
		return this.prepareRequest(httpMethod, url, requestOptions, useCredentials);
	}

	public privateRequest(
		httpMethod: HttpMethod,
		url: string,
		requestOptions: any = {},
		useCredentials: boolean = true
	): Observable<Model.ApiResponse> {
		return this.prepareRequest(httpMethod, url, requestOptions, useCredentials);
	}

	public prepareRequest(
		httpMethod: HttpMethod,
		url: string,
		requestOptions: any = {},
		useCredentials: boolean = false
	): Observable<Model.ApiResponse> {
		if (
			this.config.token === null &&
			useCredentials
		) {
			return observableThrowError(new Error('No API Token Found!'));
		}

		let opts = Object.assign({}, this.transportOptions);
		opts.method = httpMethod;

		let requestObject = requestOptions;

		requestObject = Utilities.removeUndefined({
			...requestOptions,
		});

		if (httpMethod === HttpMethod.POST || httpMethod === HttpMethod.PUT) {
			const body = requestObject;
			opts = Object.assign({ body: JSON.stringify(body) }, opts);
		}

		if (useCredentials) {
			opts.headers.authorization = this.config.token;
			if (httpMethod !== HttpMethod.GET) {
				opts.headers.nonce = nonceManager.getNonce();
			}
		}

		if (requestObject && httpMethod === HttpMethod.GET) {
			url = `${url}${Utilities.generateQuerySting(requestObject)}`;
		}

		return this.http.request(url, opts);
	}

	public processResponse<T>(res: Model.ApiResponse, classType?: Model.ClassType<T>, dataKey?: string): T | any {
		if (res.success) {
			let result = (dataKey) ? res.result[dataKey] : res.result;
			result = (result) ? result : res.result;

			if (res.result === null) {
				return res.success;
			}
			if (classType) {
				// return result;
				return this.jsc.deserialize(result, classType);
			} else if (!classType) {
				return result;
			}
		} else {
			throw res.error.error_code;
		}
	}
}
