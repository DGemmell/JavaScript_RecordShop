// Create a method that lists the inventory.
// Create a method that reports the financial situation of the Store, showing the balance and value of inventory.
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
// i want to loop over the stock array and return stock items.
// Stock.prototype.listRecords = function (stock) {
//   this.stock.forEach(function(stock)
//     this.stock(stock);
// };

Store.prototype = {
  sellARecord: function(record) {
    this.stock.pop(record);
  }
}

// Create a method so the Record Store can sell(function)
// a Record and adjusts the Store's balance to account for the Record being sold.
// If store sells a record.price then store.balance will increase

Store.prototype.storeBalance = function (balance) {
  var balance = 50;
  if(stock.length === 3){
    balance = 50;
  }
  if(stock.length === 0){
    balance = 80;
  }
  return this.balance;

};

Store.prototype.stockValue = function () {
  var value = this.stock.reduce(function(acc, stockValue) {
    return acc + stockValue.value;
  }, 0)
  return value;
}



module.exports = Store;
