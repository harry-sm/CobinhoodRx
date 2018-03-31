import {JsonConverter, JsonCustomConvert} from 'json2typescript';

@JsonConverter
export class DateTimeConverter implements JsonCustomConvert<Date> {
	public serialize(date: Date): number {
		return date.valueOf();
	}

	public deserialize(date: any): Date {
		return new Date(date);
	}
}
