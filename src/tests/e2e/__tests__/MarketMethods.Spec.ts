import { CobinhoodRxClient } from '../../../core/CobinhoodRxClient';
import { BigNumber } from 'bignumber.js';
import { LogTypeValue } from '../../../enum';

describe('Market Methods', () => {
	let cbrx: CobinhoodRxClient;

	beforeAll(() => {
		cbrx = new CobinhoodRxClient(
			{
				logType: LogTypeValue.None
			}
		);
	});

	describe('# getCurrencies', () => {
		it('should return a list containing currency data', done => {
			cbrx.Market.getCurrencies()
				.subscribe(data => {
					expect(data).toEqual(
						expect.arrayContaining([{
							CryptoCurrency: expect.any(String),
							Name: expect.any(String),
							MinUnit: expect.any(BigNumber),
							DepositFee: expect.any(BigNumber),
							WithdrawalFee: expect.any(BigNumber),
							MinWithdrawal: expect.any(BigNumber),
							Type: expect.any(String),
							IsActive: expect.any(Boolean),
							FundingFrozen: expect.any(Boolean)
						}])
					);
					done();
				},
					done
				);
		}, 60000);
	});

	describe('# getMarketPairs', () => {
		it('should return a list of market pairs', done => {
			cbrx.Market.getTradingPairs()
				.subscribe(data => {
					expect(data).toEqual(
						expect.arrayContaining([{
							Id: expect.any(String),
							BaseCurrencyId: expect.any(String),
							QuoteCurrencyId: expect.any(String),
							BaseMinSize: expect.any(BigNumber),
							BaseMaxSize: expect.any(BigNumber),
							QuoteIncrement: expect.any(BigNumber)
						}])
					);
					done();
				},
					done
				);
		}, 60000);
	});

	describe('# getOrderBook', () => {
		it('should return order offers', done => {
			cbrx.Market.getOrderBook('BTC-USDT')
				.subscribe(data => {
					expect(data.Bids).toEqual(expect.any(Array));
					expect(data.Asks).toEqual(expect.any(Array));

					expect(data.Bids).toEqual(
						expect.arrayContaining([{
							Price: expect.any(BigNumber),
							Count: expect.any(Number),
							Size: expect.any(BigNumber)
						}])
					);
					done();
				},
					done
				);
		}, 60000);
	});

	describe('# getMarketStats', () => {
		it('should return tarding stats', done => {
			cbrx.Market.getMarketStats()
				.subscribe(data => {
					expect(data).toEqual(
						expect.arrayContaining([{
							Id: expect.any(String),
							LastPrice: expect.any(BigNumber),
							LowestAsk: expect.any(BigNumber),
							HighestBid: expect.any(BigNumber),
							BaseVolume: expect.any(BigNumber),
							QuoteVolume: expect.any(BigNumber),
							IsFrozen: expect.any(Boolean),
							High24hr: expect.any(BigNumber),
							Low24hr: expect.any(BigNumber),
							PercentChanged24hr: expect.any(BigNumber),
						}])
					);
					done();
				},
					done
				);
		}, 60000);
	});

	describe('# getTicker', () => {
		it('should return the ticker data from the specified trading pair', done => {
			cbrx.Market.getTicker('BTC-USDT')
				.subscribe(data => {
					expect(data).toEqual(
						expect.objectContaining({
							TradingPairId: 'BTC-USDT',
							Timestamp: expect.any(Date),
							High24h: expect.any(BigNumber),
							Low24h: expect.any(BigNumber),
							Open24h: expect.any(BigNumber),
							Volume24h: expect.any(BigNumber),
							LastTradePrice: expect.any(BigNumber),
							HighestBid: expect.any(BigNumber),
							LowestAsk: expect.any(BigNumber)
						})
					);
					done();
				},
					done
				);
		}, 60000);
	});

	describe('# getRecentTrades', () => {
		it('should return the a list of the most recent trades for a specified trading pair', done => {
			cbrx.Market.getRecentTrades('BTC-USDT', 1)
				.subscribe(data => {
					expect(data).toEqual(
						expect.objectContaining([{
							Id: expect.any(String),
							Price: expect.any(BigNumber),
							Size: expect.any(BigNumber),
							MakerSide: expect.any(String),
							Timestamp: expect.any(Number)
						}])
					);
					done();
				},
					done
				);
		}, 60000);
	});

});
