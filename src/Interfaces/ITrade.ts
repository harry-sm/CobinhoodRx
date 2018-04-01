import { Observable } from 'rxjs';
import * as Model from '../Model';
import { PlaceOrderTypeValue } from '../Enum';

export interface ITrade {
	getOrder(orderId: string): Observable<Model.Order>;
	getOrderTrades(orderId: string): Observable<Model.OrderTrade[]>;
	getAllOrder(market?: string, limit?: number): Observable<Model.AllOrder[]>;
	placeBuyOrder(market: string, type: PlaceOrderTypeValue, price: number, size: number): Observable<Model.PlaceOrder>;
	placeSellOrder(market: string, type: PlaceOrderTypeValue, price: number, size: number): Observable<Model.PlaceOrder>;
	modifyOrder(orderId: string, price: number, size: number): Observable<boolean>;
	cancelOrder(orderId: string): Observable<boolean>;
	getOrderHistory(market?: string, limit?: number): Observable<Model.OrderHistory[]>;
	getTrade(tradeId: string): Observable<Model.Trade>;
	getTradeHistory(market: string, limit: number): Observable<Model.Trade[]>;
}
