import { JsonObject, JsonProperty } from 'json2typescript';
import { BigNumberConverter } from '../../../Converter/BigNumberConverter';
import { BigNumber } from 'bignumber.js';
import { DateTimeConverter } from '../../../Converter/DateTimeConverter';

@JsonObject
export class Ticker {
	@JsonProperty('trading_pair_id', String)
	public TradingPairId: string = undefined;

	@JsonProperty('timestamp', DateTimeConverter)
	public Timestamp: Date = undefined;

	@JsonProperty('24h_high', BigNumberConverter)
	public High24h: BigNumber = undefined;

	@JsonProperty('24h_low', BigNumberConverter)
	public Low24h: BigNumber = undefined;

	@JsonProperty('24h_open', BigNumberConverter)
	public Open24h: BigNumber = undefined;

	@JsonProperty('24h_volume', BigNumberConverter)
	public Volume24h: BigNumber = undefined;

	@JsonProperty('last_trade_price', BigNumberConverter)
	public LastTradePrice: BigNumber = undefined;

	@JsonProperty('highest_bid', BigNumberConverter)
	public HighestBid: BigNumber = undefined;

	@JsonProperty('lowest_ask', BigNumberConverter)
	public LowestAsk: BigNumber = undefined;
}
