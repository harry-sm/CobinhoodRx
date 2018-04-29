
export class Validator {
	public market(val: string) {
		val = val.toUpperCase();
		if (isValidMarket(val)) {
			return val;
		}
		throw new Error(`Invalid Market Name. Please ensure that the market name follows the following pattern 'BTC-USDT'`);
	}

	public uuid(val: string) {
		if (isValidUUID(val)) {
			return val;
		}
		throw new Error('Ivalid Id.');
	}

	public queryObject(obj) {
		// console.log(obj);
		for (const key in obj) {
			if (obj.hasOwnProperty(key)) {
				rules[key](obj[key]);
			}
		}
		return obj;
	}
}

const rules = {
	limit: (val: number) => {
		if (!isValidLimit(val)) {
			throw new Error(`Limit must be within the range of 0 and 50. 0 and 50 included.`);
		}
	},
	trading_pair_id: (val: string) => {
		if (!isValidMarket(val)) {
			throw new Error(`Bad Market Name: ${val}. Accepted market name pattern {XXX-XXX}. Eg. 'BTC-USDT'`);
		}
	},
	currency: (val: string) => {
		if (!isValidMarket(val)) {
			throw new Error(`Bad Currency Name: ${val}. Accepted currency names pattern {XXX,1X, $X} Eg. 'BTC, 1ST, $PAC'`);
		}
	}
};

export function isValidMarket(val: string) {
	return new RegExp(/[$A-Z0-9]+-[$A-Z0-9]+/).test(val);
}

export function isValidUUID(val: string) {
	return new RegExp(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/, 'i').test(val);
}
export function isValidLimit(val: number) {
	return (val >= 0 && val <= 50);
}
export function isValidCurrency(val: string) {
	return new RegExp(/[A-Z0-9]{2,5}/).test(val);
}
const Validate = new Validator();
export default Validate;
