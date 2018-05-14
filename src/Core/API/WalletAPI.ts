
import { Observable, throwError as observableThrowError } from 'rxjs';
import * as Model from '../../Model';
import { DataKeyValues } from '../../Enum/DataKeys';
import { TransportManager } from '../../Helpers/TransportManager';
import { HttpMethod } from '../../Enum/HttpMethod';
import { WithdrawalStatusValue } from '../../Enum/WithdrawalStatusValue';
import { IWallet } from '../../Interfaces/IWallet';
import Validate from '../../Helpers/Validator';
import { catchError, map } from 'rxjs/operators';

export class WalletAPI implements IWallet {
	private apiVersion: string;
	private baseUrl: string;
	private baseEndPoint: string;

	constructor(private transportManager: TransportManager, config) {
		this.apiVersion = config.apiVersion;
		this.baseUrl = config.baseUrl;
		this.baseEndPoint = `${this.baseUrl}${this.apiVersion}/wallet`;
	}

	public getWalletBalances(): Observable<Model.Balance[]> {
		return this.transportManager.privateRequest(HttpMethod.GET, `${this.baseEndPoint}/balances`)
			.pipe(
				map(data => this.transportManager.processResponse(data, Model.Balance, DataKeyValues.Balances)),
				catchError(this.catchErrorHandler)
			);
	}

	public getLedger(currency?: string, limit: number = 10): Observable<Model.Ledger[]> {
		return this.transportManager.privateRequest(HttpMethod.GET, `${this.baseEndPoint}/ledger`, {
			currency,
			limit
		}).pipe(
			map(data => this.transportManager.processResponse(data, Model.Ledger, DataKeyValues.Ledger)),
			catchError(this.catchErrorHandler)
		);
	}

	public getDepositAddresses(currency?: string): Observable<Model.DepositAddress[]> {
		return this.transportManager.privateRequest(HttpMethod.GET, `${this.baseEndPoint}/deposit_addresses`, {
			currency
		}).pipe(
			map(data => this.transportManager.processResponse(data, Model.DepositAddress, DataKeyValues.DepositAddresses)),
			catchError(this.catchErrorHandler)
		);
	}

	public getWithdrawalAddresses(currency?: string): Observable<Model.WithdrawalAddress[]> {
		return this.transportManager.privateRequest(HttpMethod.GET, `${this.baseEndPoint}/withdrawal_addresses`, {
			currency
		}).pipe(
			map(data => this.transportManager.processResponse(data, Model.WithdrawalAddress, DataKeyValues.WithdrawalAddresses)),
			catchError(this.catchErrorHandler)
		);
	}

	public getDeposit(depositId: string): Observable<Model.Deposit> {
		return this.transportManager.privateRequest(HttpMethod.GET, `${this.baseEndPoint}/deposits/${Validate.uuid(depositId)}`)
			.pipe(
				map(data => this.transportManager.processResponse(data, Model.Deposit, DataKeyValues.Deposit)),
				catchError(this.catchErrorHandler)
			);
	}

	public getAllDeposits(): Observable<Model.Deposit[]> {
		return this.transportManager.privateRequest(HttpMethod.GET, `${this.baseEndPoint}/deposits`)
			.pipe(
				map(data => this.transportManager.processResponse(data, Model.Deposit, DataKeyValues.AllDeposits)),
				catchError(this.catchErrorHandler)
			);
	}

	public getWithdrawal(withdrawalId: string): Observable<Model.Withdrawal> {
		return this.transportManager.privateRequest(HttpMethod.GET, `${this.baseEndPoint}/withdrawals/${Validate.uuid(withdrawalId)}`)
			.pipe(
				map(data => this.transportManager.processResponse(data, Model.Withdrawal, DataKeyValues.Withdrawal)),
				catchError(this.catchErrorHandler)
			);
	}

	public getAllWithdrawals(currency?: string, status?: WithdrawalStatusValue, limit?: number): Observable<Model.Withdrawal[]> {
		return this.transportManager.privateRequest(HttpMethod.GET, `${this.baseEndPoint}/withdrawals`, {
			currency,
			status,
			limit
		}).pipe(
			map(data => this.transportManager.processResponse(data, Model.Withdrawal, DataKeyValues.AllWithdrawals)),
			catchError(this.catchErrorHandler)
		);
	}

	private catchErrorHandler(res: Error) {
		return observableThrowError(res);
	}
}
