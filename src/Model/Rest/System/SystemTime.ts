import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class SystemTime {
	@JsonProperty('time', Number, false)
	public Time: number = undefined;
}
