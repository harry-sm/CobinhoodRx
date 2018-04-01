import { Observable } from 'rxjs';
import * as Model from '../Model';
import { WithdrawalStatusValue } from '../Enum';

export interface IWallet {
	getWalletBalances(): Observable<Model.Balance[]>;
	getLedger(currency?: string, limit?: number): Observable<Model.Ledger[]>;
	getDepositAddresses(currency?: string): Observable<Model.DepositAddress[]>;
	getWithdrawalAddresses(currency?: string): Observable<Model.WithdrawalAddress[]>;
	getDeposit(depositId: string): Observable<Model.Deposit>;
	getAllDeposits(): Observable<Model.Deposit[]>;
	getWithdrawal(withdrawalId: string): Observable<Model.Withdrawal>;
	getAllWithdrawals(currency?: string, status?: WithdrawalStatusValue, limit?: number): Observable<Model.Withdrawal[]>;
}
