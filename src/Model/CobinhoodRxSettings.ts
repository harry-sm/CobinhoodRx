import { LogTypeValue } from '../Enum';

export class CobinhoodRxSettings {
	public token?: string;
	public logType?: LogTypeValue;
	public logWriter?: (...args) => any;
}
