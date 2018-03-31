import { JsonObject, JsonProperty } from 'json2typescript';
import { BigNumberConverter } from '../../../Converter/BigNumberConverter';
import { BigNumber } from 'bignumber.js';
import { DateTimeConverter } from '../../../Converter/DateTimeConverter';

@JsonObject
export class AllOrder {
	@JsonProperty('id', String)
	public Id: string = undefined;

	@JsonProperty('trading_pair_id', String)
	public TradingPair: string = undefined;

	@JsonProperty('state', String)
	public State: string = undefined;

	@JsonProperty('side', String)
	public Side: string = undefined;

	@JsonProperty('type', String)
	public Type: string = undefined;

	@JsonProperty('price', BigNumberConverter)
	public Price: BigNumber = undefined;

	@JsonProperty('size', BigNumberConverter)
	public Size: BigNumber = undefined;

	@JsonProperty('filled', BigNumberConverter)
	public Filled: BigNumber = undefined;

	@JsonProperty('timestamp', DateTimeConverter)
	public Timestamp: Date = undefined;

	@JsonProperty('eq_price', BigNumberConverter)
	public EqPrice: BigNumber = undefined;
}
