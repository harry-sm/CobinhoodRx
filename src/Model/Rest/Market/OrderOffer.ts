import { JsonObject, JsonProperty } from 'json2typescript';
import { BigNumberConverter } from '../../../Converter/BigNumberConverter';
import { BigNumber } from 'bignumber.js';

@JsonObject
export class OrderOffer {
	@JsonProperty('Price', BigNumberConverter)
	public Price: BigNumber = undefined;

	@JsonProperty('Count', Number)
	public Count: number = undefined;

	@JsonProperty('Size', BigNumberConverter)
	public Size: BigNumber = undefined;
}
