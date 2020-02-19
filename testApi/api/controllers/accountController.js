'use strict';


var mongoose = require('mongoose'),
  Account = mongoose.model('Acounts');

exports.list_all_accounts = function(req, res) {
  Account.find({}, function(err, account) {
    if (err)
      res.send(err);
    res.json(account);
  });
};




exports.create_a_account = function(req, res) {
  var new_account = new Account(req.body);
  new_account.save(function(err, account) {
    if (err)
      res.send(err);
    res.json(account);
  });
};


exports.read_a_account = function(req, res) {
  Account.findById(req.params.taskId, function(err, account) {
    if (err)
      res.send(err);
    res.json(account);
  });
};


exports.update_a_account = function(req, res) {
  Account.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, account) {
    if (err)
      res.send(err);
    res.json(account);
  });
};


exports.delete_a_account = function(req, res) {
  Account.remove({
    _id: req.params.taskId
  }, function(err, account) {
    if (err)
      res.send(err);
    res.json({ message: 'Account successfully deleted' });
  });
};