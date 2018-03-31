import { Observable } from 'rxjs';
import { HttpMethod } from '../Enum';

export interface IRequest {
	custom(httpMethod: HttpMethod, url: string, queryOptions: object, useCredentials: boolean): Observable<any>;
}
