import { CobinhoodRxClient } from '../../../Core/CobinhoodRxClient';
import { BigNumber } from 'bignumber.js';
import { TimeframeValue } from '../../../Enum';
import { LogTypeValue, HttpMethod } from '../../../Enum';
import { ApiCredentialsSettings } from '../../../Helpers/ApiCredentialsSettings';

describe.only('Request Method', () => {
	let cbrx: CobinhoodRxClient;

	beforeAll(() => {
		cbrx = new CobinhoodRxClient(
			{
				token: ApiCredentialsSettings.Token,
				logType: LogTypeValue.None
			}
		);
	});

	describe.only('# custom', () => {
		it('should return success true for unauthenticated endpoint', done => {
			cbrx.Request.custom(HttpMethod.GET, `https://api.cobinhood.com/v1/system/time`)
				.subscribe(data => {
					expect(data.success).toEqual(true);
					done();
				},
					done
				);
		}, 60000);

		it('should return success true for unauthenticated endpoint with queryObject', done => {
			cbrx.Request.custom(HttpMethod.GET, `https://api.cobinhood.com/v1/market/tickers/`, { trading_pair_id: 'BTC-USDT'})
				.subscribe(data => {
					expect(data.success).toEqual(true);
					done();
				},
					done
				);
		}, 60000);

		it('should return success true for authenticated endpoint', done => {
			cbrx.Request.custom(HttpMethod.GET, `https://api.cobinhood.com/v1/wallet/balances`, {}, true)
				.subscribe(data => {
					expect(data.success).toEqual(true);
					done();
				},
					done
				);
		}, 60000);
	});
});
