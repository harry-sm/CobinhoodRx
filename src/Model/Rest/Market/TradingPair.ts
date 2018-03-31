import { JsonObject, JsonProperty } from 'json2typescript';
import { BigNumber } from 'bignumber.js';
import { BigNumberConverter } from '../../../Converter/BigNumberConverter';

@JsonObject
export class TradingPair {
	@JsonProperty('id', String)
	public Id: string = undefined;

	@JsonProperty('base_currency_id', String)
	public BaseCurrencyId: string = undefined;

	@JsonProperty('quote_currency_id', String)
	public QuoteCurrencyId: string = undefined;

	@JsonProperty('base_min_size', BigNumberConverter)
	public BaseMinSize: BigNumber = undefined;

	@JsonProperty('base_max_size', BigNumberConverter)
	public BaseMaxSize: BigNumber = undefined;

	@JsonProperty('quote_increment', BigNumberConverter)
	public QuoteIncrement: BigNumber = undefined;
}
