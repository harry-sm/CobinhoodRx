import * as Model from '../../Model';
import { DataKeyValues } from '../../Enum/DataKeys';
import { TransportManager } from '../../Helpers/TransportManager';
import { HttpMethod } from '../../Enum/HttpMethod';
import { ISystem } from '../../Interfaces/ISystem';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export class SystemAPI implements ISystem {
	private apiVersion: string;
	private baseUrl: string;
	private baseEndPoint: string;

	constructor(private transportManager: TransportManager, config) {
		this.apiVersion = config.apiVersion;
		this.baseUrl = config.baseUrl;
		this.baseEndPoint = `${this.baseUrl}${this.apiVersion}/system`;
	}

	public getSystemTime(): Observable<Model.SystemTime> {
		return this.transportManager.publicRequest(HttpMethod.GET, `${this.baseEndPoint}/time`)
			.pipe(
				map(data => this.transportManager.processResponse(data, Model.SystemTime)),
				catchError(this.catchErrorHandler)
			);
	}

	public getSystemInfo(): Observable<Model.SystemInfo> {
		return this.transportManager.publicRequest(HttpMethod.GET, `${this.baseEndPoint}/info`)
			.pipe(
				map(data => this.transportManager.processResponse(data, Model.SystemInfo, DataKeyValues.systemInfo)),
				catchError(this.catchErrorHandler)
			);
	}

	private catchErrorHandler(res: Error) {
		return observableThrowError(res);
	}
}
