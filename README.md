# CobinhoodRx


CobinhoodRx is a Reactive library that was built with TypeScript and [rxjs](https://github.com/Reactive-Extensions/RxJS) for the [Cobinhood](https://cobinhood.com/) API which runs on the node.js platform.

~~If TypeScript is not your preferred language you can use [Coinbinhood.Java](https://github.com/jd-alexander/Coinbinhood.Java)~~

---
[![npm](https://img.shields.io/npm/v/cobinhood-rx.svg)](https://www.npmjs.com/package/cobinhood-rx)
[![npm](https://img.shields.io/npm/dt/cobinhood-rx.svg)](https://www.npmjs.com/package/cobinhood-rx)
[![Greenkeeper badge](https://badges.greenkeeper.io/harry-sm/CobinhoodRx.svg)](https://greenkeeper.io/)
[![David](https://img.shields.io/david/harry-sm/CobinhoodRx.svg)](https://github.com/harry-sm/CobinhoodRx)

---

## Basic Usage
`yarn add cobinhood-rx`

or

`npm install cobinhood-rx --save`

Include in your project
```js
import {
    CobinhoodRxClient,
    LogTypeValue,
    LedgerTypeValue,
	WithdrawalStatusValue,
	TimeframeValue,
	OrderSideValue,
	OrderStateValue,
    Model,
    HttpMethod
} from "cobinhood-rx";
```

> **Note**: To gain access to rxjs operators such as `map()`, `flatMap()`, `filter()`, you will need to include [rxjs](https://github.com/ReactiveX/RxJS) in your project.

Install

`npm install rxjs`

Include in your project

```js
import "rxjs";
```


> **Note:** Any data that is returned containing decimal values, eg. 0.0007 is converter to a [Bignumber](https://github.com/MikeMcl/bignumber.js) Instance.



## CobinhoodRx Settings

#### Parameters

| Parameter           | Type   | Example                                                      |
| ------------------- | ------ | ------------------------------------------------------------ |
| settings (Optional) | object | {<br />token: 'xxxx....'<br />logType: LogTypeValue.Debug,<br />logWriter: console.log<br />} |

> **Note:** To get your API token sign into your account on cobinhood and generate it. **For first time use select the read only options.**

#### Logging

- logType: The type of logs that should be written or displayed.
  - Debug: Writes all log messages.
  - Error: Writes only error messages.
  - Warning: Writes only warning messages.
  - None: No messages are written.
- logWriter: A function that takes a single string argument and outputs the log message.

#### Example

```js
const cobinhoodRx = new CobinhoodRx({
    token: 'xvgru....',
    logType: LogTypeValue.Debug,
    logWriter: console.log
});
```




## Observable Extension

### intervalTime(param)

The intervalTime operator returns an observable that emits some sequence of data at specified intervals.

#### Parameters

| Parameter    | Type   | Example |
| ------------ | ------ | ------- |
| milliseconds | number | 5000    |

#### Example

```js
cobinhoodRx.Market.getMarketStats()
    .intervalTime(5000)
    .subscribe(
        data => {
            for (let market of data) {
                console.log(market);
            }
        });
```

The example above fetches market stats data every 5 seconds.



## Documentation
- [FAQs](/docs/faqs.md)
- [System Methods](/docs/system-methods.md)
- [Market Methods](/docs/market-methods.md)
- [Chart Methods](/docs/chart-methods.md)
- [Trading Methods](/docs/trading-methods.md)
- [Wallet Methods](/docs/wallet-methods.md)
- [Resquest Method](/docs/request-method.md)
- [Web Sockets](/docs/websockets.md)
