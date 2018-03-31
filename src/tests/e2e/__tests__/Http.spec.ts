import { HttpClient } from '../../../Connection/HttpClient';

describe('HttpClient', () => {
	let httpClient: HttpClient;

	beforeAll(() => {
		httpClient = new HttpClient();
	});

	describe('# request', () => {
		it('should pass', done => {
			const url = `https://api.cobinhood.com/v1/market/tickers/BTC-USDT`;
			httpClient.request(url).subscribe(data => {
				expect(data.success).toEqual(true);

				done();
			},
				done
			);
		}, 60000);

		it('should return success false', done => {
			const url = `https://api.cobinhood.com/v1/market/tickers/BTC-US`;
			httpClient.request(url)
				.subscribe(data => {
					expect(data.success).toEqual(false);
					done();
				},
				done
			);
		}, 60000);

		it('should return fatal error', done => {
			const url = `https://spi.cobinhood.com/v1/market/tickers/BTC-USDT`;
			httpClient.request(url)
				.subscribe(data => {
					expect(data).toEqual(undefined);
					done();
				}, (err) => {
					expect(err).toBeDefined();
					done();
				}
			);
		}, 60000);

	});
});
