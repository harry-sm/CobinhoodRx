import { JsonObject, JsonProperty } from 'json2typescript';
import { BigNumber } from 'bignumber.js';
import { BigNumberConverter } from '../../../Converter/BigNumberConverter';

@JsonObject
export class Candle {
	@JsonProperty('timeframe', String)
	public Timeframe: string = undefined;

	@JsonProperty('trading_pair_id', String)
	public TradingPairId: string = undefined;

	@JsonProperty('timestamp', Number)
	public Timestamp: number = undefined;

	@JsonProperty('open', BigNumberConverter)
	public Open: BigNumber = undefined;

	@JsonProperty('close', BigNumberConverter)
	public Close: BigNumber = undefined;

	@JsonProperty('high', BigNumberConverter)
	public High: BigNumber = undefined;

	@JsonProperty('low', BigNumberConverter)
	public Low: BigNumber = undefined;

	@JsonProperty('volume', BigNumberConverter)
	public Volume: BigNumber = undefined;
}
//  { timeframe: '6h',
//       trading_pair_id: 'BTC-USDT',
//       timestamp: 1519344000000,
//       volume: '0.00272776',
//       open: '9700',
//       close: '10899.9',
//       high: '10899.9',
//       low: '9700' }
