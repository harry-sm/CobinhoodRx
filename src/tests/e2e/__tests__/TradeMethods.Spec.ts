import { CobinhoodRxClient } from '../../../core/CobinhoodRxClient';
import { BigNumber } from 'bignumber.js';
import { LogTypeValue } from '../../../Enum/LogTypeValue';
import { ApiCredentialsSettings } from '../../../Helpers/ApiCredentialsSettings';
import { PlaceOrderTypeValue } from '../../../Enum/PlaceOrderTypeValue';

describe('Trade Methods', () => {
	let cbrx: CobinhoodRxClient;

	beforeAll((done) => {
		cbrx = new CobinhoodRxClient(
			{
				token: ApiCredentialsSettings.Token,
				logType: LogTypeValue.None
			}
		);

		done();
	});

	describe('# getOrder', () => {
		it('should return an order based on the id specified', done => {
			cbrx.Trade.getOrder('0941ef71-effa-425c-a390-0dc837117aca')
				.subscribe(data => {
					expect(data).toEqual(
						expect.objectContaining({
							Id: expect.any(String),
							TradingPair: expect.any(String),
							State: expect.any(String),
							Side: expect.any(String),
							Type: expect.any(String),
							Price: expect.any(BigNumber),
							Size: expect.any(BigNumber),
							Filled: expect.any(BigNumber),
							Timestamp: expect.any(Date)
						})
					);
					done();
				},
					done
				);
		}, 60000);
	});

	describe('# getOrderTrades', () => {
		it('should return a list of rades originating from the specific order', done => {
			cbrx.Trade.getOrderTrades('07797042-7f4b-4d09-8c25-e55fa2f80add')
				.subscribe(data => {
					expect(data).toEqual(
						expect.arrayContaining([{
							Id: expect.any(String),
							Price: expect.any(BigNumber),
							Size: expect.any(BigNumber),
							MakerSide: expect.any(String),
							Timestamp: expect.any(Date)
						}])
					);
					done();
				},
					done
				);
		}, 60000);
	});

	describe.skip('# getAllOrder', () => {
		it('should return a list of current orders', async done => {
			const order = await cbrx.Trade.placeBuyOrder('SNT-ETH', PlaceOrderTypeValue.Limit, 0.0000119, 280).toPromise();

			cbrx.Trade.getAllOrder()
				.subscribe(async data => {
					expect(data).toEqual(
						expect.arrayContaining([{
							Id: expect.any(String),
							TradingPair: expect.any(String),
							State: expect.any(String),
							Side: expect.any(String),
							Type: expect.any(String),
							Price: expect.any(BigNumber),
							Size: expect.any(BigNumber),
							Filled: expect.any(BigNumber),
							Timestamp: expect.any(Date),
							EqPrice: expect.any(BigNumber),
						}])
					);
					// await cbrx.Trade.cancelOrder(order.Id);
					done();
				},
				done,
				async () => {
					await cbrx.Trade.cancelOrder(order.Id);
				}
				);
		}, 60000);
	});

	describe.skip('# placeBuyOrder', () => {
		it('should return the order placed', async  done => {
			cbrx.Trade.placeBuyOrder('SNT-ETH', PlaceOrderTypeValue.Limit, 0.0000119, 280)
				.subscribe(async data => {
					expect(data).toEqual(
						expect.objectContaining({
							Id: expect.any(String),
							TradingPair: expect.any(String),
							State: expect.any(String),
							Side: expect.any(String),
							Type: expect.any(String),
							Price: expect.any(BigNumber),
							Size: expect.any(BigNumber),
							Filled: expect.any(BigNumber),
							Timestamp: expect.any(Date),
							EqPrice: expect.any(BigNumber)
						})
					);
					await cbrx.Trade.cancelOrder(data.Id);
					done();
				},
					done
				);
		}, 60000);
	});

	describe.skip('# placeSellOrder', () => {
		it('should return the order placed', async  done => {
			cbrx.Trade.placeSellOrder('ETH-BTC', PlaceOrderTypeValue.Limit, 0.05, 0.0982269)
				.subscribe(async data => {
					expect(data).toEqual(
						expect.objectContaining({
							Id: expect.any(String),
							TradingPair: expect.any(String),
							State: expect.any(String),
							Side: expect.any(String),
							Type: expect.any(String),
							Price: expect.any(BigNumber),
							Size: expect.any(BigNumber),
							Filled: expect.any(BigNumber),
							Timestamp: expect.any(Date),
							EqPrice: expect.any(BigNumber)
						})
					);
					await cbrx.Trade.cancelOrder(data.Id);
					done();
				},
					done
				);
		}, 60000);
	});

	describe.skip('# modifyOrder', () => {
		it('should modify the order specified', async done => {
			const order = await cbrx.Trade.placeBuyOrder('SNT-ETH', PlaceOrderTypeValue.Limit, 0.0000119, 280).toPromise();

			cbrx.Trade.modifyOrder(order.Id, 0.0000085, 280)
				.subscribe(async data => {
					expect(data).toEqual(true);
					done();
				},
				done,
				async () => {
					await cbrx.Trade.cancelOrder(order.Id);
				}
				);

		}, 60000);
	});

	describe.skip('# cancelOrder', () => {
		it('should cancel the order specified', async done => {
			const order = await cbrx.Trade.placeBuyOrder('SNT-ETH', PlaceOrderTypeValue.Limit, 0.0000119, 280).toPromise();

			cbrx.Trade.cancelOrder(order.Id)
				.subscribe(data => {
					expect(data).toEqual(true);
					done();
				},
					done
				);
		}, 60000);
	});

	describe('# getOrderHistory', () => {
		it('should return a list of past orders', done => {
			cbrx.Trade.getOrderHistory()
				.subscribe(data => {
					expect(data).toEqual(
						expect.arrayContaining([{
							Id: expect.any(String),
							TradingPair: expect.any(String),
							State: expect.any(String),
							Side: expect.any(String),
							Type: expect.any(String),
							Price: expect.any(BigNumber),
							Size: expect.any(BigNumber),
							Filled: expect.any(BigNumber),
							Timestamp: expect.any(Date),
							EqPrice: expect.any(BigNumber)
						}])
					);
					done();
				},
					done
				);
		}, 60000);
	});

	describe('# getTrade', () => {
		it('should return trade data based on the id specified', done => {
			cbrx.Trade.getTrade('ecb560bc-a4cc-4366-88c8-cb12ebbd7b23')
				.subscribe(data => {
					expect(data).toEqual(
						expect.objectContaining({
							Id: expect.any(String),
							MakerSide: expect.any(String),
							Price: expect.any(BigNumber),
							Size: expect.any(BigNumber),
							Timestamp: expect.any(Date)
						})
					);
					done();
				},
					done
				);
		}, 60000);
	});

	describe('# getTradeHistory', () => {
		it('should return a list of past trades for the market specified', done => {
			cbrx.Trade.getTradeHistory('OMG-ETH')
				.subscribe(data => {
					expect(data).toEqual(
						expect.arrayContaining([{
							Id: expect.any(String),
							MakerSide: expect.any(String),
							Price:  expect.any(BigNumber),
							Size:  expect.any(BigNumber),
							Timestamp: expect.any(Date)
						}])
					);
					done();
				},
					done
				);
		}, 60000);
	});
});
