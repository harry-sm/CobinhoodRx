import { ClassType } from '../Model';
import { TransportManager } from './TransportManager';
import { DefaultSettings } from '../Model/DefaultSettings';
import { HttpClient } from '../Connection/HttpClient';

export const TransportConnector = (config: DefaultSettings, http: HttpClient) => {
	return <T>(ApiConnector: ClassType<T>) => {
		return new ApiConnector(new TransportManager(config, http), config);
	};
};
