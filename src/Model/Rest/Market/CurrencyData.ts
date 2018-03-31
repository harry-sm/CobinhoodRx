import { JsonObject, JsonProperty } from 'json2typescript';
import { BigNumberConverter } from '../../../Converter/BigNumberConverter';
import { BigNumber } from 'bignumber.js';

@JsonObject
export class CurrencyData {
	@JsonProperty('currency', String)
	public CryptoCurrency: string = undefined;

	@JsonProperty('name', String)
	public Name: string = undefined;

	@JsonProperty('min_unit', BigNumberConverter)
	public MinUnit: BigNumber = undefined;

	@JsonProperty('deposit_fee', BigNumberConverter)
	public DepositFee: BigNumber = undefined;

	@JsonProperty('withdrawal_fee', BigNumberConverter)
	public WithdrawalFee: BigNumber = undefined;

	@JsonProperty('min_withdrawal', BigNumberConverter)
	public MinWithdrawal: BigNumber = undefined;

	@JsonProperty('type', String)
	public Type: string = undefined;

	@JsonProperty('is_active', Boolean)
	public IsActive: boolean = undefined;

	@JsonProperty('funding_frozen', Boolean)
	public FundingFrozen: boolean = undefined;
}
