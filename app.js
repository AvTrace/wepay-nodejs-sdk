// load in your modules
const WepayClient = require('./lib/wepayClient');

async function callWepay() {
  const client = new WepayClient();

  try {
    const response = await client.call('register_user', {
      client_id: 1111111,
      client_secret: 'your_client_secret',
      email: 'api@wepay.com',
      scope: 'manage_accounts,collect_payments,view_user,preapprove_payments,send_money',
      first_name: 'Bill',
      last_name: 'Klenco',
      tos_acceptance_time: + new Date(),
      original_ip: '74.125.224.84',
      original_device: `Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6;
                             en-US) AppleWebKit/534.13 (KHTML, like Gecko)
                             Chrome/9.0.597.102 Safari/534.13`
    });

    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

callWepay();
