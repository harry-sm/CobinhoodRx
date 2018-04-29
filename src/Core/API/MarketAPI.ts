
import * as Model from '../../Model';
import { DataKeyValues } from '../../Enum/DataKeys';
import { Observable } from 'rxjs/Observable';
import { TransportManager } from '../../Helpers/TransportManager';
import { HttpMethod } from '../../Enum/HttpMethod';
import { IMarket } from '../../Interfaces/IMarket';
import Validate from '../../Helpers/Validator';

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
			.map(data => this.transportManager.processResponse(data, Model.Currency, DataKeyValues.Currencies))
			.catch(this.catchErrorHandler);
	}

	public getTradingPairs(): Observable<Model.TradingPair[]> {
		return this.transportManager.publicRequest(HttpMethod.GET, `${this.baseEndPoint}/trading_pairs`)
			.map(data => this.transportManager.processResponse(data, Model.TradingPair, DataKeyValues.TradingPairs))
			.catch(this.catchErrorHandler);
	}

	public getOrderBook(market: string, limit: number = 10): Observable<Model.Orderbook> {
		return this.transportManager.publicRequest(
			HttpMethod.GET, `${this.baseEndPoint}/orderbooks/${Validate.market(market)}`, Validate.queryObject({ limit }))
			.map(data => this.transportManager.processResponse(data, Model.Orderbook, DataKeyValues.Orderbook))
			.catch(this.catchErrorHandler);
	}

	public getMarketStats(): Observable<Model.MarketStats[]> {
		return this.transportManager.publicRequest(HttpMethod.GET, `${this.baseEndPoint}/stats`)
			.map(this.hashmapToArray)
			.map(data => this.transportManager.processResponse(data, Model.MarketStats))
			.catch(this.catchErrorHandler);
	}

	public getTicker(market: string): Observable<Model.Ticker> {
		return this.transportManager.publicRequest(HttpMethod.GET, `${this.baseEndPoint}/tickers/${Validate.market(market)}`)
			.map(data => this.transportManager.processResponse(data, Model.Ticker, DataKeyValues.Ticker))
			.catch(this.catchErrorHandler);
	}

	public getRecentTrades(market: string, limit: number = 10): Observable<Model.RecentTrade[]> {
		return this.transportManager.publicRequest(
			HttpMethod.GET,
			`${this.baseEndPoint}/trades/${Validate.market(market)}`,
			Validate.queryObject({ limit })
		)
			.map(data => this.transportManager.processResponse(data, Model.RecentTrade, DataKeyValues.Trades))
			.catch(this.catchErrorHandler);
	}

	private catchErrorHandler(res: Error) {
		return Observable.throw(res);
	}
	private hashmapToArray(res: Model.ApiResponse) {
		if (res.success) {
			res.result = Object.values(res.result);
		}
		return res;
	}
}
