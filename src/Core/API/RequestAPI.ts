
import { ApiResponse } from '../../Model';
import { HttpMethod } from '../../Enum/HttpMethod';
import { IRequest } from '../../Interfaces/IRequest';
import { TransportManager } from '../../Helpers/TransportManager';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

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
			.pipe(
				map((data: any) => data),
				catchError(this.catchErrorHandler)
			);
	}

	private catchErrorHandler(res: Error) {
		return observableThrowError(res);
	}
}
