import { Utilities } from '../../../helpers/utilities';

describe('Utility Methods', () => {

	describe('# Utilities.removeUndefined', () => {
		it('should return an empty object', () => {
			const obj = {
				name: undefined,
				location: undefined
			};
			expect(Utilities.removeUndefined(obj)).toEqual({});
		});

		it('should return an object without undefined properties', () => {
			const obj = {
				name: 'Harry-sm',
				location: undefined
			};
			expect(Utilities.removeUndefined(obj)).toEqual({
				name: 'Harry-sm'
			});
		});
	});

	describe('# Utilities.typeOf', () => {
		it('should return type of object', () => {
			const obj = {
				name: undefined,
				location: undefined
			};

			expect(Utilities.typeOf(obj, 'object')).toEqual(true);
		});

		it('should return type of string', () => {
			expect(Utilities.typeOf('', 'string')).toEqual(true);
		});

		it('should fail return type of string', () => {
			expect(Utilities.typeOf('', 'number')).toEqual(false);
		});

		it('should return type of number', () => {
			expect(Utilities.typeOf(1, 'number')).toEqual(true);
		});

		it('should return type of array', () => {
			expect(Utilities.typeOf([''], 'array')).toEqual(true);
		});

		it('should return type of date', () => {
			expect(Utilities.typeOf(new Date(), 'date')).toEqual(true);
		});
	});

	describe('# Utilities.generateQuerySting', () => {
		it('should return an empty string', () => {
			const obj = {
				name: undefined,
				location: undefined
			};
			expect(Utilities.generateQuerySting(obj)).toEqual('');
			expect(Utilities.generateQuerySting({})).toEqual('');
		});

		it('should return query string', () => {
			const obj = {
				name: 'Harry-sm',
				location: undefined
			};
			expect(Utilities.generateQuerySting(obj)).toEqual('?name=Harry-sm');
		});
		it('should return encoded query for nested object', () => {
			const obj = {
				name: 'Harry-sm',
				location: {
					country: 'nowhere'
				}
			};
			expect(Utilities.generateQuerySting(obj)).toEqual('?name=Harry-sm&location=%5Bobject%20Object%5D');
		});
	});

	describe('# Utilities.isObjectEmpty', () => {

		it('should return false for object with nested undefined', () => {
			const obj = {
				name: undefined,
				location: undefined
			};
			expect(Utilities.isObjectEmpty(obj)).toEqual(false);
		});

		it('should return false for 0 value', () => {
			expect(Utilities.isObjectEmpty(0)).toEqual(false);
		});

		it('should return true for empty string', () => {
			expect(Utilities.isObjectEmpty('')).toEqual(true);
		});
		it('should return true for null value', () => {
			expect(Utilities.isObjectEmpty(null)).toEqual(true);
		});
		it('should return true for undefined value', () => {
			expect(Utilities.isObjectEmpty(undefined)).toEqual(true);
		});
		it('should return true for empty object', () => {
			expect(Utilities.isObjectEmpty({})).toEqual(true);
		});
	});

	describe('# Utilities.extend', () => {
		it('should return a new object with overwritten properties', () => {
			const obj1 = {
				name: 'Harry',
				age: 12
			};
			const obj2 = {
				name: 'Joel',
				age: 21
			};
			const newObj = Utilities.extend(obj1, obj2);
			expect(newObj).toEqual({
				name: 'Joel',
				age: 21
			});
		});

		it('should return a new object with null property', () => {
			const obj1 = {
				firstName: 'Harry'
			};
			const obj2 = {
				firstName: null
			};
			const newObj = Utilities.extend(obj1, obj2);
			expect(newObj).toEqual({
				firstName: null
			});
		});

		it('should return an empty object', () => {
			const obj1 = {
				firstName: 'Harry'
			};
			const obj2 = {
				firstName: undefined
			};
			const newObj = Utilities.extend(obj1, obj2);
			expect(newObj).toEqual({});
		});
	});
});
