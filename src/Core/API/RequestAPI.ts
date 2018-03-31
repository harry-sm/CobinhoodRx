
import { Observable } from 'rxjs/Observable';
import { TransportManager } from '../../Helpers/TransportManager';
import { HttpMethod } from '../../Enum/HttpMethod';
import { IRequest } from '../../Interfaces/IRequest';
import { ApiResponse } from '../../Model';

export class RequestAPI implements IRequest {

	constructor(private transportManager: TransportManager, config) {
	}

	public custom(
		httpMethod: HttpMethod,
		url: string,
		queryOptions?: object,
		useCredentials: boolean = false
	): Observable<ApiResponse> {
		return this.transportManager.prepareRequest(httpMethod, url, queryOptions, useCredentials)
			.map((data: any) => data)
			.catch(this.catchErrorHandler);
	}

	private catchErrorHandler(res: Error) {
		return Observable.throw(res);
	}
}
