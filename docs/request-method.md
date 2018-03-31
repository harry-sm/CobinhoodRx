## Request methods

### custom(...params)
This method is not dependent on the API version and allows for the sending of custom requests.

#### Parameters

| Parameter      | Type       | Example                                             | Description                                                  |
| -------------- | ---------- | --------------------------------------------------- | ------------------------------------------------------------ |
| httpMethod     | HttpMethod | HttpMethod.GET                                      | The type of request.                                         |
| url            | string     | https://api.cobinhood.com/v1/market/trades/BTC-USDT | API endpoint.                                                |
| queryOptions   | Object     | { limit: 30 }                                       | Query string parameters or body data.                        |
| useCredentials | Boolean    | false                                               | Specify whether the use  of the API token should be enabled or not. |

#### Return Type
`Observable<ApiResponse>`

#### Example
```js
cobinhoodRx.Request.custom(
	'https://api.cobinhood.com/v1/market/trades/BTC-USDT', 
	{ limit: 30 },
    false
    )
    .subscribe(
        data => {
            console.log(data);
        });
```
