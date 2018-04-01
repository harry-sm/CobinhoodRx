import { Observable } from 'rxjs';
import * as Model from '../Model';
import { TimeframeValue } from '../Enum';

export interface IChart {
	/**
	 * This method retruns candle data.
	 *
	 * @param {string} market The trading pair. Eg. 'BTC-USDT', 'BTC-COB'
	 * @param {TimeframeValue} timeframe The trade period each candle repesents.
	 * @param {Date} [startPeriod] The start of the time period range that is being queried.
	 * @param {Date} [endPeriod] The end of the time period range that is being queried.
	 * @returns {Observable<Model.Candle[]>}
	 * @memberof IChart
	 */
	getCandles(
		market: string,
		timeframe: TimeframeValue,
		startPeriod?: Date,
		endPeriod?: Date
	): Observable<Model.Candle[]>;
}
