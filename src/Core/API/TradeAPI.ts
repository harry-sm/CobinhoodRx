
import * as Model from '../../Model';
import { DataKeyValues } from '../../Enum/DataKeys';
import { TransportManager } from '../../Helpers/TransportManager';
import { HttpMethod } from '../../Enum/HttpMethod';
import { PlaceOrderTypeValue } from '../../Enum/PlaceOrderTypeValue';
import { ITrade } from '../../Interfaces/ITrade';
import Validate from '../../Helpers/Validator';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

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
		return this.transportManager.privateRequest(HttpMethod.GET, `${this.baseEndPoint}/orders/${Validate.uuid(orderId)}`)
			.pipe(
				map(data => this.transportManager.processResponse(data, Model.Order, DataKeyValues.Order)),
				catchError(this.catchErrorHandler)
			);
	}

	public getOrderTrades(orderId: string): Observable<Model.OrderTrade[]> {
		return this.transportManager.privateRequest(HttpMethod.GET, `${this.baseEndPoint}/orders/${Validate.uuid(orderId)}/trades`)
			.pipe(
				map(data => this.transportManager.processResponse(data, Model.OrderTrade, DataKeyValues.Trades)),
				catchError(this.catchErrorHandler)
			);
	}

	public getAllOrder(market?: string, limit?: number): Observable<Model.AllOrder[]> {
		return this.transportManager.privateRequest(HttpMethod.GET, `${this.baseEndPoint}/orders`, {
			trading_pair_id: market,
			limit
		}).pipe(
			map(data => this.transportManager.processResponse(data, Model.AllOrder, DataKeyValues.Orders)),
			catchError(this.catchErrorHandler)
		);
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
		return this.transportManager.privateRequest(HttpMethod.PUT, `${this.baseEndPoint}/orders/${Validate.uuid(orderId)}`, {
			price: price.toString(),
			size: size.toString()
		})
		.pipe(
			map(data => this.transportManager.processResponse(data)),
			catchError(this.catchErrorHandler)
		);
	}

	public cancelOrder(orderId: string): Observable<boolean> {
		return this.transportManager.privateRequest(HttpMethod.DELETE, `${this.baseEndPoint}/orders/${Validate.uuid(orderId)}`)
			.pipe(
				map(data => this.transportManager.processResponse(data)),
				catchError(this.catchErrorHandler)
			);
	}

	public getOrderHistory(market?: string, limit?: number): Observable<Model.OrderHistory[]> {
		return this.transportManager.privateRequest(HttpMethod.GET, `${this.baseEndPoint}/order_history`, {
			trading_pair_id: market,
			limit
		}).pipe(
			map(data => this.transportManager.processResponse(data, Model.OrderHistory, DataKeyValues.Orders)),
			catchError(this.catchErrorHandler)
		);
	}

	public getTrade(tradeId: string): Observable<Model.Trade> {
		return this.transportManager.privateRequest(HttpMethod.GET, `${this.baseEndPoint}/trades/${Validate.uuid(tradeId)}`)
			.pipe(
				map(data => this.transportManager.processResponse(data, Model.Trade, DataKeyValues.Trade)),
				catchError(this.catchErrorHandler)
			);
	}

	public getTradeHistory(market: string, limit: number = 10): Observable<Model.Trade[]> {
		return this.transportManager.privateRequest(HttpMethod.GET, `${this.baseEndPoint}/trades`, {
			trading_pair_id: market,
			limit
		}).pipe(
			map(data => this.transportManager.processResponse(data, Model.Trade, DataKeyValues.Trades)),
			catchError(this.catchErrorHandler)
		);
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
		}).pipe(
			map(data => this.transportManager.processResponse(data, Model.PlaceOrder, DataKeyValues.Order)),
			catchError(this.catchErrorHandler)
		);
	}

	private catchErrorHandler(res: Error) {
		return observableThrowError(res);
	}
}
