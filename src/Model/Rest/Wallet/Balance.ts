import { JsonObject, JsonProperty } from 'json2typescript';
import { BigNumberConverter } from '../../../Converter/BigNumberConverter';
import { BigNumber } from 'bignumber.js';

@JsonObject
export class Balance {
	@JsonProperty('currency', String)
	public Currency: string = undefined;

	@JsonProperty('type', String)
	public Type: string = undefined;

	@JsonProperty('total', BigNumberConverter)
	public Total: BigNumber = undefined;

	@JsonProperty('on_order', BigNumberConverter)
	public OnOrder: BigNumber = undefined;

	@JsonProperty('locked', Boolean)
	public Locked: boolean = undefined;

	@JsonProperty('usd_value', BigNumberConverter)
	public UsdValue: BigNumber = undefined;

	@JsonProperty('btc_value', BigNumberConverter)
	public BtcValue: BigNumber = undefined;
}
