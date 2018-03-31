import { JsonObject, JsonProperty } from 'json2typescript';
import { DateTimeConverter } from '../../../Converter/DateTimeConverter';

@JsonObject
export class WithdrawalAddress {
	@JsonProperty('id', String)
	public Id: string = undefined;

	@JsonProperty('currency', String)
	public Currency: string = undefined;

	@JsonProperty('name', String)
	public Name: string = undefined;

	@JsonProperty('type', String)
	public Type: string = undefined;

	@JsonProperty('address', String)
	public Address: string = undefined;

	@JsonProperty('created_at', DateTimeConverter)
	public CreatedAt: Date = undefined;
}
