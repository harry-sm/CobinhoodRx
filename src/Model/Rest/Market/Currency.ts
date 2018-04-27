import { JsonObject, JsonProperty } from 'json2typescript';
import { BigNumberConverter } from '../../../Converter/BigNumberConverter';
import { BigNumber } from 'bignumber.js';

@JsonObject
export class Currency {
	@JsonProperty('currency', String)
	public CryptoCurrency: string = undefined;

	@JsonProperty('name', String)
	public Name: string = undefined;

	@JsonProperty('type', String)
	public Type: string = undefined;

	@JsonProperty('min_unit', BigNumberConverter)
	public MinUnit: BigNumber = undefined;

	@JsonProperty('deposit_fee', BigNumberConverter)
	public DepositFee: BigNumber = undefined;

	@JsonProperty('withdrawal_fee', BigNumberConverter)
	public WithdrawalFee: BigNumber = undefined;

	@JsonProperty('min_withdrawal', BigNumberConverter)
	public MinWithdrawal: BigNumber = undefined;

	@JsonProperty('funding_min_size', BigNumberConverter)
	public FundingMinSize: BigNumber = undefined;

	@JsonProperty('interest_increment', BigNumberConverter)
	public InterestIncrement: BigNumber = undefined;

	@JsonProperty('margin_enabled', Boolean)
	public MarginEnabled: boolean = undefined;

	@JsonProperty('deposit_frozen', Boolean)
	public DepositFrozen: boolean = undefined;

	@JsonProperty('withdrawal_frozen', Boolean)
	public WithdrawalFrozen: boolean = undefined;
}
