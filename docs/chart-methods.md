## Chart Methods

#### CobinhoodRx.Chart.getCandles(...params)

Get candle data for the market specified.

#### Parameters

| Parameter              | Type           | Example                 |
| ---------------------- | -------------- | ----------------------- |
| market                 | string         | 'BTC-USDT'              |
| timeframe              | TimeFrameValue | TimeFrameValue. OneHour |
| startPeriod (Optional) | Date           | new Date('2018-02-02')  |
| endPeriod (Optional)   | Date           | new Date('2018-02-10')  |

#### Return Type

`Observable<Candle[]>`

#### Example

```js
cobinhoodRx.Chart.getCandles('BTC-USDT', TimeframeValue.SixHour, new Date('2018-02-02'))
	.subscribe(
		console.log(data);
	});
```
