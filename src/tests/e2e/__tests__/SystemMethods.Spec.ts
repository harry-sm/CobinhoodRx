import { CobinhoodRxClient } from '../../../core/CobinhoodRxClient';
import { LogTypeValue } from '../../../enum';

describe('System Methods', () => {
	let cbrx: CobinhoodRxClient;

	beforeAll(() => {
		cbrx = new CobinhoodRxClient(
			{
				logType: LogTypeValue.None
			}
		);
	});

	describe('# getSystemTime', () => {
		it('should return system time', done => {
			cbrx.System.getSystemTime()
				.subscribe(data => {
					expect(data).toEqual(
						expect.objectContaining({ Time: expect.any(Number) })
					);
					done();
				},
				done
			);
		}, 60000);
	});
	describe('# getSystemInfo', () => {
		it('should return system info', done => {
			cbrx.System.getSystemInfo()
				.subscribe(data => {
					expect(data).toEqual(
						expect.objectContaining({
							Phase: expect.any(String),
							Revision: expect.any(String)
						})
					);
					done();
				},
				done
			);
		}, 60000);
	});
});
