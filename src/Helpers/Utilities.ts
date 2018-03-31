export class Utilities {
	public static removeUndefined(obj: any) {
		const res: object = (Object).assign({}, obj);

		for (const key of Object.keys(res)) {
			if (res[key] === undefined) {
				delete res[key];
			}
		}
		return res;
	}

	public static generateQuerySting(queryObject: object) {
		const keys = Object.keys(queryObject);
		if (keys.length === 0) {
			return '';
		}
		const builder: string[] = [];
		for (const key of keys) {
			if (queryObject.hasOwnProperty(key) && !Utilities.isObjectEmpty(queryObject[key])) {
				builder.push(`${key}=${queryObject[key]}`);
			}
		}

		const qString = `?${encodeURI(builder.join('&'))}`;
		return (qString.length <= 1) ? '' : qString;
	}

	public static isObjectEmpty(obj: any) {
		if (
			obj === undefined ||
			obj === null ||
			obj === '' ||
			(!this.typeOf(obj, 'number') && Object.keys(obj).length === 0)
		) {
			return true;
		}
		return false;
	}

	public static extend(target: any, source: any) {
		if (this.typeOf(target, 'object') && this.typeOf(source, 'object')) {

			const clonedTarget = Object.create(target);
			const sourceKeys = Object.keys(Utilities.removeUndefined(source));

			for (const key of sourceKeys) {
				if (key in clonedTarget) {
					clonedTarget[key] = source[key];
				}
			}
			return clonedTarget;
		}
		return target;
	}

	public static typeOf(obj: any, sType: string) {
		obj = Object.prototype.toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
		return sType.toLowerCase() === obj;
	}
}
