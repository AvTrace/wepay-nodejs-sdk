module.exports = {
  //user
  lookup_user: '/user',
  register_user: '/user/register',
  modify_user: '/user/modify',
  send_confirmation: '/user/send_confirmation',

  //account
  lookup_account: '/account',
  search_account: '/account/find',
  create_account: '/account/create',
  modify_account: '/account/modify',
  delete_account: '/account/delete',
  get_update_uri: '/account/get_update_uri',
  settlement_setup: '/account/settlement_setup',

  //kyc
  lookup_kyc: '/account/kyc',
  create_kyc: '/account/kyc/create',
  authorize_kyc: '/account/kyc/authorize',

  //checkout
  lookup_checkout: '/checkout',
  search_checkout: '/checkout/find',
  create_checkout: '/checkout/create',
  cancel_checkout: '/checkout/cancel',
  refund_checkout: '/checkout/refund',
  capture_checkout: '/checkout/capture',
  modify_checkout: '/checkout/modify',
  release_checkout: '/checkout/release',

  //credit card
  lookup_credit_card: '/credit_card',
  create_credit_card: '/credit_card/create',
  authorize_credit_card: '/credit_card/authorize',
  find_credit_card: '/credit_card/find',
  modify_credit_card: '/credit_card/modify',
  transfer_credit_card: '/credit_card/transfer',
  delete_credit_card: '/credit_card/delete',
  recurring_credit_card: '/credit_card/enable_recurring',
  //risk
  lookup_risk: '/rbit',
  search_risk: '/rbit/find',
  create_risk: '/rbit/create',
  delete_risk: '/rbit/delete',

  //batch
  create_batch: '/batch/create',

  //settlement
  create_settlement: '/settlement_bank/create',
  authorize_settlement: '/settlement_bank/authorize',

  //notification
  lookup_notification: '/notification',
  lookup_notification_preference: '/notification_preference',
  create_notification_preference: '/notification_preference/create',
  delete_notification_preference: '/notification_preference/delete',
  find_notification_preference: '/notification_preference/find',
  modify_notification_preference: '/notification_preference/modify'
}
