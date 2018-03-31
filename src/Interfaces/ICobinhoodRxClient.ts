import { SystemAPI } from '../Core/API/SystemAPI';
import { MarketAPI } from '../Core/API/MarketAPI';
import { ChartAPI } from '../Core/API/ChartAPI';
import { TradeAPI } from '../Core/API/TradeAPI';
import { WalletAPI } from '../Core/API/WalletAPI';
import { RequestAPI } from '../Core/API/RequestAPI';

export interface ICobinhoodRxClient {
	/**
	 * Access all System API methods.
	 *
	 * @type {SystemAPI}
	 * @memberof ICobinhoodRxClient
	 */
	readonly System: SystemAPI;

	/**
	 * Access all Market API methods.
	 *
	 * @type {MarketAPI}
	 * @memberof ICobinhoodRxClient
	 */
	readonly Market: MarketAPI;

	/**
	 * Access all Chart API methods.
	 *
	 * @type {ChartAPI}
	 * @memberof ICobinhoodRxClient
	 */
	readonly Chart: ChartAPI;

	/**
	 * Access all Trade API methods.
	 *
	 * @type {TradeAPI}
	 * @memberof ICobinhoodRxClient
	 */
	readonly Trade: TradeAPI;

	/**
	 * Access all Wallet API methods.
	 *
	 * @type {WalletAPI}
	 * @memberof ICobinhoodRxClient
	 */
	readonly Wallet: WalletAPI;

	/**
	 * Access all Request API methods.
	 *
	 * @type {RequestAPI}
	 * @memberof ICobinhoodRxClient
	 */
	readonly Request: RequestAPI;
}
