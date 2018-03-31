## Market Methods

### CobinhoodRx.Market.getCurrencies()

Get all the market currencies.

#### Parameters

| Parameter | Type | Example |
| --------- | ---- | ------- |
| none      | -    | -       |

#### Return Type

`Observable<Currency[]>`

#### Example

```js
cobinhoodRx.Market.getCurrencies()
	.subscribe(
		console.log(data);
	});
```



### CobinhoodRx.Market.getTradingPairs()

Get the data of all trading pairs.

#### Parameters

| Parameter | Type | Example |
| --------- | ---- | ------- |
| none      | -    | -       |

#### Return Type

`Observable<TradingPair[]>`

#### Example

```js
cobinhoodRx.Market.getTradingPairs()
	.subscribe(
		console.log(data);
	});
```



### CobinhoodRx.Market.getOrderBook(...params)

Get both bid and ask orders from the order book for a specific market.

#### Parameters

| Parameter        | Type   | Example    | Description             |
| ---------------- | ------ | ---------- | ----------------------- |
| market           | string | 'BTC-USDT' |                         |
| limit (Optional) | number | 10         | Default: 10, Maximum 50 |

#### Return Type

`Observable<Orderbook>`

#### Example

```js
cobinhoodRx.Market.getCurrencies.getOrderBook('BTC-USDT', 10)
	.subscribe(
		console.log(data);
	});
```



### CobinhoodRx.Market.getMarketStats()

Get a snapshot of all market stats.

#### Parameters

| Parameter | Type | Example |
| --------- | ---- | ------- |
| none      | -    | -       |

#### Return Type

`Observable<MarketStats[]>`

#### Example

```js
cobinhoodRx.Market.getMarketStats()
	.subscribe(
		console.log(data);
	});
```



### CobinhoodRx.Market.getTicker(param)

Get the tick data for the market specified.

#### Parameters

| Parameter | Type   | Example    |
| --------- | ------ | ---------- |
| market    | string | 'BTC-USDT' |

#### Return Type

`Observable<Ticker>`

#### Example

```js
cobinhoodRx.Market.getTicker('BTC-USDT')
	.subscribe(
		console.log(data);
	});
```



### CobinhoodRx.Market.getRecentTrades(...params)

Get the most recent trade for the market specified.

#### Parameters

| Parameter | Type   | Example    | Description              |
| --------- | ------ | ---------- | ------------------------ |
| market    | string | 'BTC-USDT' |                          |
| limit     | number | 10         | Default: 10,  Maximum 50 |

#### Return Type

`Observable<RecentTrade[]>`

#### Example

```js
cobinhoodRx.Market.getRecentTrades('BTC-USDT', 10)
	.subscribe(
		console.log(data);
	});
```

