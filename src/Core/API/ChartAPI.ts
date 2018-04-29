
import * as Model from '../../Model';
import { DataKeyValues } from '../../Enum/DataKeys';
import { Observable } from 'rxjs/Observable';
import { TransportManager } from '../../Helpers/TransportManager';
import { HttpMethod } from '../../Enum/HttpMethod';
import { TimeframeValue } from '../../Enum/TimeframeValue';
import { IChart } from '../../Interfaces/IChart';
import Validate from '../../Helpers/Validator';

export class ChartAPI implements IChart {
	private apiVersion: string;
	private baseUrl: string;
	private baseEndPoint: string;

	constructor(private transportManager: TransportManager, config) {
		this.apiVersion = config.apiVersion;
		this.baseUrl = config.baseUrl;
		this.baseEndPoint = `${this.baseUrl}${this.apiVersion}/chart`;
	}

	public getCandles(
		market: string,
		timeframe: TimeframeValue,
		startPeriod?: Date,
		endPeriod?: Date
	): Observable<Model.Candle[]> {
		return this.transportManager.publicRequest(HttpMethod.GET, `${this.baseEndPoint}/candles/${Validate.market(market)}`, {
			start_time: (startPeriod) ? startPeriod.valueOf() : undefined,
			end_time: (endPeriod) ? endPeriod.valueOf() : undefined,
			timeframe
		})
			.map(data => this.transportManager.processResponse(data, Model.Candle, DataKeyValues.Candles))
			.catch(this.catchErrorHandler);
	}

	private catchErrorHandler(res: Error) {
		return Observable.throw(res);
	}
}
