import { ApiResponseError } from './ApiResponseError';

export class ApiResponse {
	public success: boolean = false;
	public message: string = '';
	public result: any = undefined;
	public error: ApiResponseError;
	public request_id: string = undefined;
}
