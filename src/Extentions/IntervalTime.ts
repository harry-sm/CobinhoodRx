import { Observable, interval } from 'rxjs';
import { switchMap, map, startWith } from 'rxjs/operators';

/**
 * The intervalTime operator returns an Observable
 * that emits some sequence of data at specified intervals.
 */
export const IntervalTime = <T>(milliseconds: number) => (source: Observable<T>) => {
	return interval(milliseconds).pipe(
		switchMap(() => source.pipe(
			map((responseData) => {
				return responseData;
			})
		)),
		startWith()
	);
};
