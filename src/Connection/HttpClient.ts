import { Observable } from 'rxjs';
import fetch from 'node-fetch';

import { ApiResponse } from '../Model';
import { LogTypeValue } from '../Enum';
import { Logger } from '../Helpers/Logger';

export class HttpClient {
	public request(url: string, options?): Observable<ApiResponse> {
		return this._request(url, options);
	}

	private _request(url: string, options: any = {}): Observable<ApiResponse> {
		const response: ApiResponse = new ApiResponse();
		Logger.Stream.write(LogTypeValue.Debug, `Request URL: ${JSON.stringify(options)}`);
		const promise = fetch(url, options)
			.then(res => {
				return res.json()
					.then((json: ApiResponse) => {

						const semiProcessedResponse = Object.assign(response, json);
						Logger.Stream.write(LogTypeValue.Debug, `Response: ${JSON.stringify(semiProcessedResponse)}`);
						return semiProcessedResponse;
					});
			});
		promise.catch(error => {
			Logger.Stream.write(LogTypeValue.Error, `HTTP Request Failed. URL: ${url}`);
			return Observable.throw(error);
		});
		return Observable.fromPromise(promise);
	}
}
