var _ = require("lodash");

var Store = function(name, city, balance) {
  this.name = name;
  this.city = city;
  this.stock = [];
  this.balance = balance;
}

Store.prototype = {
  addRecord: function(record) {
    this.stock.push(record);
  }
}


module.exports = Store;
