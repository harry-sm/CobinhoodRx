import { Logger } from '../Helpers/Logger';
import { LogTypeValue } from '../Enum';
import { Utilities } from '../Helpers/Utilities';

import { HttpClient } from '../connection/HttpClient';
import { TransportConnector } from '../Helpers/TransportConnector';
import { DefaultSettings } from '../Model/DefaultSettings';
import { CobinhoodRxSettings } from '../Model/CobinhoodRxSettings';

import { SystemAPI } from './API/SystemAPI';
import { WalletAPI } from './API/WalletAPI';
import { MarketAPI } from './API/MarketAPI';
import { ChartAPI } from './API/ChartAPI';
import { TradeAPI } from './API/TradeAPI';
import { RequestAPI } from './API/RequestAPI';
import { ICobinhoodRxClient } from '../Interfaces/ICobinhoodRxClient';

export class CobinhoodRxClient implements ICobinhoodRxClient {
	private http: HttpClient;
	private config: DefaultSettings;
	private readonly defaults: DefaultSettings = {
		token: null,
		baseUrl: 'https://api.cobinhood.com/',
		apiVersion: 'v1',
		logType: LogTypeValue.None,
		logWriter: null
	};

	private systemAPI: SystemAPI;
	private marketAPI: MarketAPI;
	private chartAPI: ChartAPI;
	private tradeAPI: TradeAPI;
	private walletAPI: WalletAPI;
	private requestAPI: RequestAPI;

	constructor(settings?: CobinhoodRxSettings) {

		this.http = new HttpClient();
		this.config = Utilities.extend(this.defaults, settings);
		Logger.create(this.config.logType, this.config.logWriter);

		const connect = TransportConnector(this.config, this.http);

		this.systemAPI = connect(SystemAPI);
		this.marketAPI = connect(MarketAPI);
		this.chartAPI = connect(ChartAPI);
		this.tradeAPI = connect(TradeAPI);
		this.walletAPI = connect(WalletAPI);
		this.requestAPI = connect(RequestAPI);
	}

	public get System(): SystemAPI {
		return this.systemAPI;
	}

	public get Market(): MarketAPI {
		return this.marketAPI;
	}

	public get Chart(): ChartAPI {
		return this.chartAPI;
	}

	public get Trade(): TradeAPI {
		return this.tradeAPI;
	}

	public get Wallet(): WalletAPI {
		return this.walletAPI;
	}

	public get Request(): RequestAPI {
		return this.requestAPI;
	}
}
