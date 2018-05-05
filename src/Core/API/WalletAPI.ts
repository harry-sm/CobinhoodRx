import * as Model from '../../Model';
import { DataKeyValues } from '../../Enum/DataKeys';
import { Observable } from 'rxjs/Observable';
import { TransportManager } from '../../Helpers/TransportManager';
import { HttpMethod } from '../../Enum/HttpMethod';
import { WithdrawalStatusValue } from '../../Enum/WithdrawalStatusValue';
import { IWallet } from '../../Interfaces/IWallet';
import Validate from '../../Helpers/Validator';

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
			.map(data => this.transportManager.processResponse(data, Model.Balance, DataKeyValues.Balances))
			.catch(this.catchErrorHandler);
	}

	public getLedger(currency?: string, limit: number = 10): Observable<Model.Ledger[]> {
		return this.transportManager.privateRequest(HttpMethod.GET, `${this.baseEndPoint}/ledger`, {
			currency,
			limit
		})
			.map(data => this.transportManager.processResponse(data, Model.Ledger, DataKeyValues.Ledger))
			.catch(this.catchErrorHandler);
	}

	public getDepositAddresses(currency?: string): Observable<Model.DepositAddress[]> {
		return this.transportManager.privateRequest(HttpMethod.GET, `${this.baseEndPoint}/deposit_addresses`, {
			currency
		})
			.map(data => this.transportManager.processResponse(data, Model.DepositAddress, DataKeyValues.DepositAddresses))
			.catch(this.catchErrorHandler);
	}

	public getWithdrawalAddresses(currency?: string): Observable<Model.WithdrawalAddress[]> {
		return this.transportManager.privateRequest(HttpMethod.GET, `${this.baseEndPoint}/withdrawal_addresses`, {
			currency
		})
			.map(data => this.transportManager.processResponse(data, Model.WithdrawalAddress, DataKeyValues.WithdrawalAddresses))
			.catch(this.catchErrorHandler);
	}

	public getDeposit(depositId: string): Observable<Model.Deposit> {
		return this.transportManager.privateRequest(HttpMethod.GET, `${this.baseEndPoint}/deposits/${Validate.uuid(depositId)}`)
			.map(data => this.transportManager.processResponse(data, Model.Deposit, DataKeyValues.Deposit))
			.catch(this.catchErrorHandler);
	}

	public getAllDeposits(): Observable<Model.Deposit[]> {
		return this.transportManager.privateRequest(HttpMethod.GET, `${this.baseEndPoint}/deposits`)
			.map(data => this.transportManager.processResponse(data, Model.Deposit, DataKeyValues.AllDeposits))
			.catch(this.catchErrorHandler);
	}

	public getWithdrawal(withdrawalId: string): Observable<Model.Withdrawal> {
		return this.transportManager.privateRequest(HttpMethod.GET, `${this.baseEndPoint}/withdrawals/${Validate.uuid(withdrawalId)}`)
			.map(data => this.transportManager.processResponse(data, Model.Withdrawal, DataKeyValues.Withdrawal))
			.catch(this.catchErrorHandler);
	}

	public getAllWithdrawals(currency?: string, status?: WithdrawalStatusValue, limit?: number): Observable<Model.Withdrawal[]> {
		return this.transportManager.privateRequest(HttpMethod.GET, `${this.baseEndPoint}/withdrawals`, {
			currency,
			status,
			limit
		})
			.map(data => this.transportManager.processResponse(data, Model.Withdrawal, DataKeyValues.AllWithdrawals))
			.catch(this.catchErrorHandler);
	}

	private catchErrorHandler(res: Error) {
		return Observable.throw(res);
	}
}
