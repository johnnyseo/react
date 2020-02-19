'use strict';
module.exports = function(app) {
  var account = require('../controllers/accountController');

  // account Routes
  app.route('/account')
    .get(account.list_all_accounts)
    .post(account.create_a_account);


  app.route('/account/:userId')
    .get(account.read_a_user)
    .put(account.update_a_user)
    .delete(account.delete_a_user);
};