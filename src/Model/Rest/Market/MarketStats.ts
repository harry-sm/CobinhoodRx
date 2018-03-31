import { JsonObject, JsonProperty } from 'json2typescript';
import { BigNumberConverter } from '../../../Converter/BigNumberConverter';
import { BigNumber } from 'bignumber.js';

@JsonObject
export class MarketStats {
	@JsonProperty('id', String)
	public Id: string = undefined;

	@JsonProperty('last_price', BigNumberConverter)
	public LastPrice: BigNumber = undefined;

	@JsonProperty('lowest_ask', BigNumberConverter)
	public LowestAsk: BigNumber = undefined;

	@JsonProperty('highest_bid', BigNumberConverter)
	public HighestBid: BigNumber = undefined;

	@JsonProperty('base_volume', BigNumberConverter)
	public BaseVolume: BigNumber = undefined;

	@JsonProperty('quote_volume', BigNumberConverter)
	public QuoteVolume: BigNumber = undefined;

	@JsonProperty('is_frozen', Boolean)
	public IsFrozen: boolean = undefined;

	@JsonProperty('high_24hr', BigNumberConverter)
	public High24hr: BigNumber = undefined;

	@JsonProperty('low_24hr', BigNumberConverter)
	public Low24hr: BigNumber = undefined;

	@JsonProperty('percent_changed_24hr', BigNumberConverter)
	public PercentChanged24hr: BigNumber = undefined;
}
