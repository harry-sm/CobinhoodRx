## System Methods

### CobinhoodRx.System.getSystemTime()

Get system time as Unix timestamp.

#### Parameters

| Parameter | Type | Example |
| --------- | ---- | ------- |
| none      | -    | -       |


#### Return Type
`Observable<SystemTime>`

#### Example
```js
cobinhoodRx.Trade.
	.subscribe(
		console.log(data);
	});
```



### CobinhoodRx.System.getSystemInfo()

Get system info.

#### Parameters

| Parameter | Type | Example |
| --------- | ---- | ------- |
| none      | -    | -       |


#### Return Type
`Observable<SystemInfo>`

#### Example
```js
cobinhoodRx.System.getSystemInfo()
    .subscribe(
        console.log(data);
    });
```

