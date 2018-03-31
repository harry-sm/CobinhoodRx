import { JsonObject, JsonProperty } from 'json2typescript';
import { BigNumberConverter } from '../../../Converter/BigNumberConverter';
import { BigNumber } from 'bignumber.js';
import { DateTimeConverter } from '../../../Converter/DateTimeConverter';

@JsonObject
export class Withdrawal {
	@JsonProperty('withdrawal_id', String)
	public WithdrawalId: string = undefined;

	@JsonProperty('user_id', String)
	public UserId: string = undefined;

	@JsonProperty('status', String)
	public Status: string = undefined;

	@JsonProperty('confirmations', Number)
	public Confirmations: number = undefined;

	@JsonProperty('required_confirmations', Number)
	public RequiredConfirmations: number = undefined;

	@JsonProperty('created_at', DateTimeConverter)
	public CreatedAt: Date = undefined;

	@JsonProperty('sent_at', DateTimeConverter)
	public SentAt: Date = undefined;

	@JsonProperty('completed_at', DateTimeConverter)
	public CompletedAt: Date = undefined;

	@JsonProperty('updated_at', DateTimeConverter)
	public UpdatedAt: Date = undefined;

	@JsonProperty('to_address', String)
	public ToAddress: string = undefined;

	@JsonProperty('txhash', String)
	public Txhash: string = undefined;

	@JsonProperty('currency', String)
	public Currency: string = undefined;

	@JsonProperty('amount', BigNumberConverter)
	public Amount: BigNumber = undefined;

	@JsonProperty('fee', BigNumberConverter)
	public Fee: BigNumber = undefined;
}
