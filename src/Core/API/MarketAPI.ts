import * as Model from '../../Model';
import { DataKeyValues } from '../../Enum/DataKeys';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { TransportManager } from '../../Helpers/TransportManager';
import { HttpMethod } from '../../Enum/HttpMethod';
import { IMarket } from '../../Interfaces/IMarket';
import Validate from '../../Helpers/Validator';
import { catchError, map } from 'rxjs/operators';

export class MarketAPI implements IMarket {
	private apiVersion: string;
	private baseUrl: string;
	private baseEndPoint: string;

	constructor(private transportManager: TransportManager, config) {
		this.apiVersion = config.apiVersion;
		this.baseUrl = config.baseUrl;
		this.baseEndPoint = `${this.baseUrl}${this.apiVersion}/market`;
	}

	public getCurrencies(): Observable<Model.Currency[]> {
		return this.transportManager.publicRequest(HttpMethod.GET, `${this.baseEndPoint}/currencies`)
			.pipe(
				map(data => this.transportManager.processResponse(data, Model.Currency, DataKeyValues.Currencies)),
				catchError(this.catchErrorHandler)
			);
	}

	public getTradingPairs(): Observable<Model.TradingPair[]> {
		return this.transportManager.publicRequest(HttpMethod.GET, `${this.baseEndPoint}/trading_pairs`)
			.pipe(
				map(data => this.transportManager.processResponse(data, Model.TradingPair, DataKeyValues.TradingPairs)),
				catchError(this.catchErrorHandler)
			);
	}

	public getOrderBook(market: string, limit: number = 10): Observable<Model.Orderbook> {
		return this.transportManager.publicRequest(
			HttpMethod.GET, `${this.baseEndPoint}/orderbooks/${Validate.market(market)}`, Validate.queryObject({ limit }))
			.pipe(
				map(data => this.transportManager.processResponse(data, Model.Orderbook, DataKeyValues.Orderbook)),
				catchError(this.catchErrorHandler)
			);
	}

	public getMarketStats(): Observable<Model.MarketStats[]> {
		return this.transportManager.publicRequest(HttpMethod.GET, `${this.baseEndPoint}/stats`)
			.pipe(
				map(this.hashmapToArray),
				map(data => this.transportManager.processResponse(data, Model.MarketStats)),
				catchError(this.catchErrorHandler)
			);
	}

	public getTicker(market: string): Observable<Model.Ticker> {
		return this.transportManager.publicRequest(HttpMethod.GET, `${this.baseEndPoint}/tickers/${Validate.market(market)}`)
			.pipe(
				map(data => this.transportManager.processResponse(data, Model.Ticker, DataKeyValues.Ticker)),
				catchError(this.catchErrorHandler)
			);
	}

	public getRecentTrades(market: string, limit: number = 10): Observable<Model.RecentTrade[]> {
		return this.transportManager.publicRequest(
			HttpMethod.GET,
			`${this.baseEndPoint}/trades/${Validate.market(market)}`,
			Validate.queryObject({ limit })
		).pipe(
			map(data => this.transportManager.processResponse(data, Model.RecentTrade, DataKeyValues.Trades)),
			catchError(this.catchErrorHandler)
		);
	}

	private catchErrorHandler(res: Error) {
		return observableThrowError(res);
	}
	private hashmapToArray(res: Model.ApiResponse) {
		if (res.success) {
			res.result = Object.values(res.result);
		}
		return res;
	}
}
