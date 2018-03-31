import {JsonConverter, JsonCustomConvert} from 'json2typescript';
import { BigNumber } from 'bignumber.js';

@JsonConverter
export class PercentageConvert implements JsonCustomConvert<BigNumber> {
	public serialize(data: BigNumber): string {
		return data.toString();
	}

	public deserialize(data: string): any {
		BigNumber.config({ DECIMAL_PLACES: 10 });
		return new BigNumber(data).multipliedBy(100);
	}
}
