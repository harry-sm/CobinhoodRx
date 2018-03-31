
import * as Model from '../../Model';
import { DataKeyValues } from '../../Enum/DataKeys';
import { Observable } from 'rxjs/Observable';
import { TransportManager } from '../../Helpers/TransportManager';
import { HttpMethod } from '../../Enum/HttpMethod';
import { PlaceOrderTypeValue } from '../../Enum/PlaceOrderTypeValue';
import { ITrade } from '../../Interfaces/ITrade';

export class TradeAPI implements ITrade {
	private apiVersion: string;
	private baseUrl: string;
	private baseEndPoint: string;

	constructor(private transportManager: TransportManager, config) {
		this.apiVersion = config.apiVersion;
		this.baseUrl = config.baseUrl;
		this.baseEndPoint = `${this.baseUrl}${this.apiVersion}/trading`;
	}

	public getOrder(orderId: string): Observable<Model.Order> {
		return this.transportManager.privateRequest(HttpMethod.GET, `${this.baseEndPoint}/orders/${orderId}`)
			.map(data => this.transportManager.processResponse(data, Model.Order, DataKeyValues.Order))
			.catch(this.catchErrorHandler);
	}

	public getOrderTrades(orderId: string): Observable<Model.OrderTrade[]> {
		return this.transportManager.privateRequest(HttpMethod.GET, `${this.baseEndPoint}/orders/${orderId}/trades`)
			.map(data => this.transportManager.processResponse(data, Model.OrderTrade, DataKeyValues.Trades))
			.catch(this.catchErrorHandler);
	}

	public getAllOrder(market?: string, limit?: number): Observable<Model.AllOrder[]> {
		return this.transportManager.privateRequest(HttpMethod.GET, `${this.baseEndPoint}/orders`, {
			trading_pair_id: market,
			limit
		})
			.map(data => this.transportManager.processResponse(data, Model.AllOrder, DataKeyValues.Orders))
			.catch(this.catchErrorHandler);
	}

	public placeBuyOrder(
		market: string,
		type: PlaceOrderTypeValue,
		price: number,
		size: number
	): Observable<Model.PlaceOrder> {
		return this.placeOrder(market, 'bid', type, price, size);
	}

	public placeSellOrder(
		market: string,
		type: PlaceOrderTypeValue,
		price: number,
		size: number
	): Observable<Model.PlaceOrder> {
		return this.placeOrder(market, 'ask', type, price, size);
	}

	public modifyOrder(orderId: string, price: number, size: number): Observable<boolean> {
		return this.transportManager.privateRequest(HttpMethod.PUT, `${this.baseEndPoint}/orders/${orderId}`, {
			price: price.toString(),
			size: size.toString()
		})
			.map(data => this.transportManager.processResponse(data))
			.catch(this.catchErrorHandler);
	}

	public cancelOrder(orderId: string): Observable<boolean> {
		return this.transportManager.privateRequest(HttpMethod.DELETE, `${this.baseEndPoint}/orders/${orderId}`)
			.map(data => this.transportManager.processResponse(data))
			.catch(this.catchErrorHandler);
	}

	public getOrderHistory(market?: string, limit?: number): Observable<Model.OrderHistory[]> {
		return this.transportManager.privateRequest(HttpMethod.GET, `${this.baseEndPoint}/order_history`, {
			trading_pair_id: market,
			limit
		})
			.map(data => this.transportManager.processResponse(data, Model.OrderHistory, DataKeyValues.Orders))
			.catch(this.catchErrorHandler);
	}

	public getTrade(tradeId: string): Observable<Model.Trade> {
		return this.transportManager.privateRequest(HttpMethod.GET, `${this.baseEndPoint}/trades/${tradeId}`)
			.map(data => this.transportManager.processResponse(data, Model.Trade, DataKeyValues.Trade))
			.catch(this.catchErrorHandler);
	}

	public getTradeHistory(market: string, limit: number = 10): Observable<Model.Trade[]> {
		return this.transportManager.privateRequest(HttpMethod.GET, `${this.baseEndPoint}/trades`, {
			trading_pair_id: market,
			limit
		})
			.map(data => this.transportManager.processResponse(data, Model.Trade, DataKeyValues.Trades))
			.catch(this.catchErrorHandler);
	}

	private placeOrder(
		market: string,
		side: string,
		type: PlaceOrderTypeValue,
		price: number,
		size: number
	): Observable<Model.PlaceOrder> {
		return this.transportManager.privateRequest(HttpMethod.POST, `${this.baseEndPoint}/orders`, {
			trading_pair_id: market,
			side,
			type,
			price: price.toString(),
			size: size.toString()
		})
			.map(data => this.transportManager.processResponse(data, Model.PlaceOrder, DataKeyValues.Order))
			.catch(this.catchErrorHandler);
	}

	private catchErrorHandler(res: Error) {
		return Observable.throw(res);
	}
}
