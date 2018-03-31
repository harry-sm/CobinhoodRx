## Wallet Methods

### CobinhoodRx.Wallet.getWalletBalances()

Get all current balances.

#### Parameters

| Parameter | Type | Example |
| --------- | ---- | ------- |
| none      | -    | -       |

#### Return Type

`Observable<Balance[]>`

#### Example

```js
cobinhoodRx.Wallet.getWalletBalances()
	.subscribe(
		console.log(data);
	});
```



### CobinhoodRx.Wallet.getLedger(...params)

Get all transaction history.

#### Parameters

| Parameter           | Type   | Example | Description             |
| ------------------- | ------ | ------- | ----------------------- |
| currency (Optional) | string | 'BTC'   |                         |
| limit (Optional)    | number | 10      | Default: 10, Maximum 50 |

#### Return Type

`Observable<Ledger[]>`

#### Example

```js
cobinhoodRx.Wallet.getLedger('BTC', 10)
	.subscribe(
		console.log(data);
	});
```



### CobinhoodRx.Wallet.getDepositAddresses(param)

Get all deposit addresses.

#### Parameters

| Parameter           | Type   | Example | Description |
| ------------------- | ------ | ------- | ----------- |
| currency (Optional) | string | 'BTC'   |             |

#### Return Type

`Observable<DepositAddress[]>`

#### Example

```js
cobinhoodRx.Wallet.getDepositAddresses('BTC')
	.subscribe(
		console.log(data);
	});
```



### CobinhoodRx.Wallet.getWithdrawalAddresses(param)

Get all withdrawal addresses.

#### Parameters

| Parameter           | Type   | Example | Description |
| ------------------- | ------ | ------- | ----------- |
| currency (Optional) | string | 'BTC'   |             |

#### Return Type

`Observable<WithdrawalAddress[]>`

#### Example

```js
cobinhoodRx.Wallet.getWithdrawalAddresses('BTC')
	.subscribe(
		console.log(data);
	});
```



### CobinhoodRx.Wallet.getDeposit(param)

Get the deposit data for an id specified.

#### Parameters

| Parameter | Type   | Example                                | Description |
| --------- | ------ | -------------------------------------- | ----------- |
| depositId | string | '2600c655-31e5-47e2-ade3-10593ea45991' |             |

#### Return Type

`Observable<Deposit>`

#### Example

```js
cobinhoodRx.Wallet.getDeposit('2600c655-31e5-47e2-ade3-10593ea45991')
	.subscribe(
		console.log(data);
	});
```



### CobinhoodRx.Wallet.getAllDeposits()

Get all deposit data.

#### Parameters

| Parameter | Type | Example | Description |
| --------- | ---- | ------- | ----------- |
| none      | -    | -       |             |

#### Return Type

`Observable<Deposit[]>`

#### Example

```js
cobinhoodRx.Wallet.getAllDeposits(currency?: string, status?: string, limit?: string)
	.subscribe(
		console.log(data);
	});
```



### CobinhoodRx.Wallet.getWithdrawal(param)

Get the withdrawal data for an id specified.

#### Parameters

| Parameter    | Type   | Example                                | Description |
| ------------ | ------ | -------------------------------------- | ----------- |
| withdrawalId | string | '2600c655-31e5-47e2-ade3-10593ea45991' |             |

#### Return Type

`Observable<Withdrawal>`

#### Example

```js
cobinhoodRx.Wallet.getWithdrawal('f7e9f50c-563c-4caa-9054-386bafb60c40')
	.subscribe(
		console.log(data);
	});
```



### CobinhoodRx.Wallet.getAllWithdrawals(...params)

Get all withdrawals data.

#### Parameters

| Parameter           | Type                  | Example                       | Description              |
| ------------------- | --------------------- | ----------------------------- | ------------------------ |
| currency (Optional) | string                | 'ETH'                         |                          |
| status (Optional)   | WithdrawalStatusValue | WithdrawalStatusValue. TxSent |                          |
| limit (Optional)    | number                | 10                            | Default: 10,  Maximum 50 |

#### Return Type

`Observable<Withdrawal[]>`

#### Example

```js
cobinhoodRx.Wallet.getAllWithdrawals('ETH', status?: string, limit?: string)
	.subscribe(
		console.log(data);
	});
```

