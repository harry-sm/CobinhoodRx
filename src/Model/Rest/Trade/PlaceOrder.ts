import { JsonObject, JsonProperty } from 'json2typescript';
import { BigNumberConverter } from '../../../Converter/BigNumberConverter';
import { BigNumber } from 'bignumber.js';
// import { DateTime } from '../../Converter/DateTime';
import { Order } from './Order';

@JsonObject
export class PlaceOrder extends Order {
	@JsonProperty('eq_price', BigNumberConverter)
	public EqPrice: BigNumber = undefined;
}
