import { JsonConverter, JsonCustomConvert, JsonConvert } from 'json2typescript';
import { CurrencyData } from '../Model/Rest/Market/CurrencyData';

@JsonConverter
export class CurrencyConverter implements JsonCustomConvert<CurrencyData[]> {
	public serialize(data: CurrencyData[]): any {
		return data;
	}

	public deserialize(data: any[]): any {
		const jsc: JsonConvert = new JsonConvert();

		return data.map(item => {
			return jsc.deserialize(item, CurrencyData);
		});
	}
}
