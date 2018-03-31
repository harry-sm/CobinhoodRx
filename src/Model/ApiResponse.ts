import { ApiResponseError } from './ApiResponseError';

export class ApiResponse {
	public success: boolean = false;
	public message: string = '';
	public result: any = undefined;
	public error: ApiResponseError;
	public request_id: string = undefined;

	// constructor(json) {
	// 	for (const prop in json) {
	// 		if (json.hasOwnProperty(prop)) {
	// 			this[prop] = json[prop];
	// 		}
	// 	}
	// }
}
