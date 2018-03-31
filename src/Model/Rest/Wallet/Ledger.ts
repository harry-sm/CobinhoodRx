import { JsonObject, JsonProperty, Any } from 'json2typescript';
import { BigNumberConverter } from '../../../Converter/BigNumberConverter';
import { BigNumber } from 'bignumber.js';
import { DateTimeConverter } from '../../../Converter/DateTimeConverter';

@JsonObject
export class Ledger {
	@JsonProperty('action', String)
	public Action: string = undefined;

	@JsonProperty('type', String)
	public Type: string = undefined;

	@JsonProperty('trade_id', Any)
	public TradeId: string = undefined;

	@JsonProperty('deposit_id', Any)
	public DepositId: string = undefined;

	@JsonProperty('withdrawal_id', Any)
	public WithdrawalId: string = undefined;

	@JsonProperty('currency', String)
	public Currency: string = undefined;

	@JsonProperty('amount', BigNumberConverter)
	public Amount: BigNumber = undefined;

	@JsonProperty('balance', BigNumberConverter)
	public Balance: BigNumber = undefined;

	@JsonProperty('timestamp', DateTimeConverter)
	public Timestamp: Date = undefined;
}
