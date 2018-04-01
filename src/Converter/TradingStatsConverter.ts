import { JsonConverter, JsonCustomConvert, JsonConvert } from 'json2typescript';
import { CurrencyData } from '../Model/Rest/Market/CurrencyData';
import { MarketStats } from '../Model/Rest/Market/MarketStats';

@JsonConverter
export class CurrencyConverter implements JsonCustomConvert<CurrencyData[]> {
	public serialize(data: CurrencyData[]): any {
		return data;
	}

	public deserialize(data: any): any {
		const jsc: JsonConvert = new JsonConvert();
		const arrayData = Object.values(data);

		return arrayData.map(item => {
			return jsc.deserialize(item, MarketStats);
		});
	}
}
