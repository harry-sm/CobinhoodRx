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
		// console.log('convert ', arrayData);

		return arrayData.map(item => {
			// console.log('convert ', item);
			return jsc.deserialize(item, MarketStats);
		});
		// return jsc.deserialize(data, OrderbookData);
	}
}
