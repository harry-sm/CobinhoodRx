import { JsonObject, JsonProperty } from 'json2typescript';
import { DateTimeConverter } from '../../../Converter/DateTimeConverter';

@JsonObject
export class DepositAddress {
	@JsonProperty('currency', String)
	public Currency: string = undefined;

	@JsonProperty('address', String)
	public Address: string = undefined;

	@JsonProperty('created_at', DateTimeConverter)
	public CreatedAt: Date = undefined;

	@JsonProperty('type', String)
	public Type: string = undefined;
}
