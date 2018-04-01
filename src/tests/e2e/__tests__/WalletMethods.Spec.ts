import { CobinhoodRxClient } from '../../../Core/CobinhoodRxClient';
import { BigNumber } from 'bignumber.js';
import { LogTypeValue } from '../../../Enum';
import { ApiCredentialsSettings } from '../../../Helpers/ApiCredentialsSettings';

describe('Wallet Methods', () => {
	let cbrx: CobinhoodRxClient;

	beforeAll(() => {
		cbrx = new CobinhoodRxClient(
			{
				token: ApiCredentialsSettings.Token,
				logType: LogTypeValue.None
			}
		);
	});

	describe('# getWalletBalances', () => {
		it('should return a list containing wallet balances', done => {
			cbrx.Wallet.getWalletBalances()
				.subscribe(data => {
					expect(data).toEqual(
						expect.arrayContaining([{
								Currency: expect.any(String),
								Type: expect.any(String),
								Total: expect.any(BigNumber),
								OnOrder: expect.any(BigNumber),
								Locked: expect.any(Boolean),
								UsdValue: expect.any(BigNumber),
								BtcValue: expect.any(BigNumber)
							}])
					);
					done();
				},
					done
				);
		}, 60000);
	});

	describe('# getLedger', () => {
		it('should return a list containing balance history', done => {
			cbrx.Wallet.getLedger('ETH')
				.subscribe(data => {
					// console.log(data);
					expect(data[0]).toEqual(
						expect.objectContaining({
							Action: expect.any(String),
							Type: expect.any(String),
							// TradeId: expect.anything(),
							// DepositId: expect.anything(),
							// WithdrawalId: expect.anything(),
							Currency: expect.any(String),
							Amount: expect.any(BigNumber),
							Balance: expect.any(BigNumber),
							Timestamp: expect.any(Date)
						})
					);
					done();
				},
					done
				);
		}, 60000);
	});

	describe('#getDepositAddresses', () => {
		it('should return a list containing wallet deposit addresses', done => {
			cbrx.Wallet.getDepositAddresses('ETH')
				.subscribe(data => {
					expect(data).toEqual(
						expect.arrayContaining([{
							Currency: expect.any(String),
							Address: expect.any(String),
							CreatedAt: expect.any(Date),
							Type: expect.any(String)
						}])
					);
					done();
				},
					done
				);
		}, 60000);
	});

	describe('#getWithdrawalAddresses', () => {
		it('should return a list containing withdraw address data', done => {
			cbrx.Wallet.getWithdrawalAddresses('ETH')
				.subscribe(data => {
					// console.log(data);
					expect(data).toEqual(
						expect.arrayContaining([{
							Id: expect.any(String),
							Currency: expect.any(String),
							Name: expect.any(String),
							Type: expect.any(String),
							Address: expect.any(String),
							CreatedAt: expect.any(Date)
						}])
					);

					done();
				},
					done
				);
		}, 60000);
	});

	describe('#getWithdrawal', () => {
		it('should return withdrawal data', done => {
			cbrx.Wallet.getWithdrawal('f7e9f50c-563c-4caa-9054-386bafb60c40')
				.subscribe(data => {
					// console.log(data);
					expect(data).toEqual(
						expect.objectContaining({
							WithdrawalId: expect.any(String),
							UserId: expect.any(String),
							Status: expect.any(String),
							Confirmations: expect.any(Number),
							RequiredConfirmations: expect.any(Number),
							CreatedAt: expect.any(Date),
							SentAt: expect.any(Date),
							CompletedAt: expect.any(Date),
							UpdatedAt: expect.any(Date),
							ToAddress: expect.any(String),
							Txhash: expect.any(String),
							Currency: expect.any(String),
							Amount: expect.any(BigNumber),
							Fee: expect.any(BigNumber)
						})
					);
					done();
				},
					done
				);
		}, 60000);
	});

	describe('#getAllWithdrawals', () => {
		it('should return list of widthdrawals', done => {
			cbrx.Wallet.getAllWithdrawals()
				.subscribe(data => {
					// console.log(data);
					expect(data).toEqual(
						expect.arrayContaining([{
							WithdrawalId: expect.any(String),
							UserId: expect.any(String),
							Status: expect.any(String),
							Confirmations: expect.any(Number),
							RequiredConfirmations: expect.any(Number),
							CreatedAt: expect.any(Date),
							SentAt: expect.any(Date),
							CompletedAt: expect.any(Date),
							UpdatedAt: expect.any(Date),
							ToAddress: expect.any(String),
							Txhash: expect.any(String),
							Currency: expect.any(String),
							Amount: expect.any(BigNumber),
							Fee: expect.any(BigNumber)
						}])
					);
					done();
				},
					done
				);
		}, 60000);
	});

	describe('#getDeposit', () => {
		it('should return deposit data', done => {
			cbrx.Wallet.getDeposit('2600c655-31e5-47e2-ade3-10593ea45581')
				.subscribe(data => {
					// console.log(data);
					expect(data).toEqual(
						expect.objectContaining({
							DepositId: expect.any(String),
							UserId: expect.any(String),
							Status: expect.any(String),
							Confirmations: expect.any(Number),
							RequiredConfirmations: expect.any(Number),
							CreatedAt: expect.any(Date),
							CompletedAt: expect.any(Date),
							FromAddress: expect.any(String),
							Txhash: expect.any(String),
							Currency: expect.any(String),
							Amount: expect.any(BigNumber),
							Fee: expect.any(BigNumber)
						})
					);
					done();
				},
					done
				);
		}, 60000);
	});

	describe('#getAllDeposits', () => {
		it('should return a list of deposits', done => {
			cbrx.Wallet.getAllDeposits()
				.subscribe(data => {
					// console.log(data);
					expect(data).toEqual(
						expect.arrayContaining([{
							DepositId: expect.any(String),
							UserId: expect.any(String),
							Status: expect.any(String),
							Confirmations: expect.any(Number),
							RequiredConfirmations: expect.any(Number),
							CreatedAt: expect.any(Date),
							CompletedAt: expect.any(Date),
							FromAddress: expect.any(String),
							Txhash: expect.any(String),
							Currency: expect.any(String),
							Amount: expect.any(BigNumber),
							Fee: expect.any(BigNumber)
						}])
					);
					done();
				},
					done
				);
		}, 60000);
	});
});
