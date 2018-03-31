import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class SystemInfo {
	@JsonProperty('phase', String)
	public Phase: string = undefined;

	@JsonProperty('revision', String)
	public Revision: string = undefined;
}
