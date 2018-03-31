import {JsonConverter, JsonCustomConvert, JsonConvert} from 'json2typescript';
import { OrderOffer } from '../Model/Rest/Market/OrderOffer';

@JsonConverter
export class OrderOfferConverter implements JsonCustomConvert<OrderOffer[]> {
	public serialize(arr: OrderOffer[]): any {
		return serializeTransform(arr);
	}

	public deserialize(arr: string[][]): any {
		return deserializeTransform(arr);
	}
}

function deserializeTransform(arr: string[][]) {
	const jsc: JsonConvert = new JsonConvert();

	return arr.map(offer => {
		const data: any = {
			Price: Number(offer[0]),
			Count: Number(offer[1]),
			Size: Number(offer[2])
		};

		return jsc.deserialize(data, OrderOffer);
	});
}

function serializeTransform(arr: OrderOffer[]) {
	return arr.map(offer => {
		const builder: any[] = [];
		builder.push(offer.Price.toString());
		builder.push(offer.Count.toString());
		builder.push(offer.Price.toString());

		return builder;
	});
}
