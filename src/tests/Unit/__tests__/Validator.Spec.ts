import Validate, { isValidMarket, isValidCurrency, isValidUUID, isValidLimit } from '../../../Helpers/Validator';

describe('validator Methods', () => {
	describe('# isValidMarket', () => {
		it('should return true for (BTC-USDT)', () => {
			expect(isValidMarket('BTC-USDT')).toBe(true);
		});

		it('should return false for invalid market name', () => {
			expect(isValidMarket('BTC/USDT')).toBe(false);
			expect(isValidMarket('BTC_USDT')).toBe(false);
			expect(isValidMarket('BTCUSDT')).toBe(false);
		});
	});

	describe('# isValidCurrency', () => {
		it('should return true for (BTC)', () => {
			expect(isValidCurrency('BTC')).toBe(true);
		});

		it('should return true for ($PAC)', () => {
			expect(isValidCurrency('$PAC')).toBe(true);
		});

		it('should return true for (0X)', () => {
			expect(isValidCurrency('0X')).toBe(true);
		});

		it('should return false for currency name containing ban symbols', () => {
			expect(isValidCurrency('!@#%^&*()')).toBe(false);
		});

		it('should return false for currency name with lowercase characters', () => {
			expect(isValidCurrency('btc')).toBe(false);
		});
	});

	describe('# isValidUUID', () => {
		it('should return true', () => {
			expect(isValidUUID('07797042-7f4b-4d09-8c25-e55fa2f80add')).toBe(true);
		});
	});

	describe('# isValidLimit', () => {
		it('should return true', () => {
			expect(isValidLimit(15)).toBe(true);
		});

		it('should return false for any value outside the range of 0 and 50', () => {
			expect(isValidLimit(-1)).toBe(false);
			expect(isValidLimit(51)).toBe(false);
		});
	});

});
