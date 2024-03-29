![wepay logo](https://images.contentstack.io/v3/assets/bltf86d70f093add08d/blt63c9f31073b6633e/63330deff709a318104f8e81/WePay_RGB_(1).svg)

Yet another WePay NodeJS SDK [wepay](https://www.wepay.com) :) but with upgrades.

```js
// load in your modules
const { WepayClient } = require('wepay');

const client = new WepayClient(access_token);

client.use_staging();

client
  .call('create_checkout', {
    account_id: 1723052,
    amount: 50,
    currency: 'USD',
    short_description: 'Selling 42 Pens',
    type: 'goods',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });

// If you use Node.js v7.4 or above you can use async/await

try {
  const response = await client.call('create_checkout', {
    account_id: 1723052,
    amount: 50,
    currency: 'USD',
    short_description: 'Selling 42 Pens',
    type: 'goods',
  });

  console.log(response);
} catch(error) {
  console.log(error);
}
```

## Installation

Local installation:

    $ npm install wepay-node
  OR

    $ yarn add wepay-node

Global installation:

    $ npm install -g wepay-node
  OR

    $ yarn add wepay-node -g 

Note:

    When installing with global settings, you'll need to set your NODE_PATH environment variable.

Install dependencies:

    $ npm install

## Endpoints

Check `lib/endpoints` for more call endpoints.

You can specify in the SDK which endpoint (stage or prod) you wish to use. See, [endpoints](https://stage.wepay.com/developer/reference/endpoints).

To use staging endpoint:

```js
client.use_staging();
```

To use production endpoint:

```js
client.use_production();
```

## Risk Headers

You can supply WePay with risk-related information on every API call by passing the WePay-Risk-Token and Client-IP values to the `call` function:

```js
client
  .call(
    'create_checkout',
    {
      account_id: 1723052,
      amount: 50,
      currency: 'USD',
      short_description: 'Selling 42 Pens',
      type: 'goods',
    },
    '123e4567-e89b-12d3-a456-426655440000',
    '100.166.99.123'
  )
	.then(response => {
    console.log('%s', response);
	})
	.catch(error => {
		console.log(error);
  });

// Or with async/await
try {
  const response = await client.call(
    'create_checkout',
    {
      account_id: 1723052,
      amount: 50,
      currency: 'USD',
      short_description: 'Selling 42 Pens',
      type: 'goods',
    },
    '123e4567-e89b-12d3-a456-426655440000',
    '100.166.99.123'
  );

  console.log(response);
} catch(error) {
  console.log(error);
}
);
```

Detailed information regarding the Risk Headers can be found at the [WePay API Documentation](https://developer.wepay.com/reference/risk_headers).

## More Information

* [WePay API](https://www.wepay.com/developer) for documentation
* [API Support](https://support.wepay.com) for API questions

## License

(The MIT License)

Copyright (c) 2009-2019 Avtrace Inc;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
