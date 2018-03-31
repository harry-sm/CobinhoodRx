import { Observable } from 'rxjs';
import * as Model from '../Model';

export interface IMarket {
	getCurrencies(): Observable<Model.Currency[]>;
	getTradingPairs(): Observable<Model.TradingPair[]>;
	getOrderBook(market: string, limit: number): Observable<Model.Orderbook>;
	getMarketStats(): Observable<Model.MarketStats[]>;
	getTicker(market: string): Observable<Model.Ticker>;
	getRecentTrades(market: string, limit: number): Observable<Model.RecentTrade[]>;
}
