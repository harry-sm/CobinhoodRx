import { JsonObject, JsonProperty } from 'json2typescript';
import { OrderOffer } from './OrderOffer';
import { OrderOfferConverter } from '../../../Converter/OrderOfferConverter';

@JsonObject
export class Orderbook {
	@JsonProperty('sequence', Number)
	public Sequence: number = undefined;

	@JsonProperty('bids', OrderOfferConverter)
	public Bids: OrderOffer[] = undefined;

	@JsonProperty('asks', OrderOfferConverter)
	public Asks: OrderOffer[] = undefined;
}
