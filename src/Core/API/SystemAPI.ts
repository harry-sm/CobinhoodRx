
import * as Model from '../../Model';
import { DataKeyValues } from '../../Enum/DataKeys';
import { Observable } from 'rxjs/Observable';
import { TransportManager } from '../../Helpers/TransportManager';
import { HttpMethod } from '../../Enum/HttpMethod';
import { ISystem } from '../../Interfaces/ISystem';

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
			.map(data => this.transportManager.processResponse(data, Model.SystemTime))
			.catch(this.catchErrorHandler);
	}

	public getSystemInfo(): Observable<Model.SystemInfo> {
		return this.transportManager.publicRequest(HttpMethod.GET, `${this.baseEndPoint}/info`)
			.map(data => this.transportManager.processResponse(data, Model.SystemInfo, DataKeyValues.systemInfo))
			.catch(this.catchErrorHandler);
	}

	private catchErrorHandler(res: Error) {
		return Observable.throw(res);
	}
}
