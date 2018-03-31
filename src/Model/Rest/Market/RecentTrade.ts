import { JsonObject, JsonProperty } from 'json2typescript';
import { BigNumberConverter } from '../../../Converter/BigNumberConverter';
import { BigNumber } from 'bignumber.js';

@JsonObject
export class RecentTrade {
	@JsonProperty('id', String)
	public Id: string = undefined;

	@JsonProperty('price', BigNumberConverter)
	public Price: BigNumber = undefined;

	@JsonProperty('size', BigNumberConverter)
	public Size: BigNumber = undefined;

	@JsonProperty('maker_side', String)
	public MakerSide: string = undefined;

	@JsonProperty('timestamp', Number)
	public Timestamp: number = undefined;
}
