import { Observable } from 'rxjs';
import * as Model from '../Model';

export interface ISystem {
	/**
	 * This method returns the system time.
	 *
	 * @returns {Observable<Model.SystemTime>}
	 * @memberof ISystem
	 */
	getSystemTime(): Observable<Model.SystemTime>;

	/**
	 * This method returns system info.
	 *
	 * @returns {Observable<Model.SystemInfo>}
	 * @memberof ISystem
	 */
	getSystemInfo(): Observable<Model.SystemInfo>;
}
