// Create a method that lists the inventory.
// Create a method so the Record Store can sell a Record and adjusts the Store's balance to account for the Record being sold.
// Create a method that reports the financial situation of the Store, showing the balance and value of inventory.
// Create a method that allows the store to view all Records of a given Genre.
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
