import { JsonObject, JsonProperty } from 'json2typescript';
import { BigNumberConverter } from '../../../Converter/BigNumberConverter';
import { BigNumber } from 'bignumber.js';
import { DateTimeConverter } from '../../../Converter/DateTimeConverter';

@JsonObject
export class Deposit {
	@JsonProperty('deposit_id', String)
	public DepositId: string = undefined;

	@JsonProperty('user_id', String)
	public UserId: string = undefined;

	@JsonProperty('status', String)
	public Status: string | 'tx_confirmed' = undefined;

	@JsonProperty('confirmations', Number)
	public Confirmations: number = undefined;

	@JsonProperty('required_confirmations', Number)
	public RequiredConfirmations: number = undefined;

	@JsonProperty('created_at', DateTimeConverter)
	public CreatedAt: Date = undefined;

	@JsonProperty('completed_at', DateTimeConverter)
	public CompletedAt: Date = undefined;

	@JsonProperty('from_address', String)
	public FromAddress: string = undefined;

	@JsonProperty('txhash', String)
	public Txhash: string = undefined;

	@JsonProperty('currency', String)
	public Currency: string = undefined;

	@JsonProperty('amount', BigNumberConverter)
	public Amount: BigNumber = undefined;

	@JsonProperty('fee', BigNumberConverter)
	public Fee: BigNumber = undefined;
}
