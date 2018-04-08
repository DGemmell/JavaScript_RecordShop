// Create a RecordCollector (or Customer) constructor who can buy and sell records.
// The RecordCollector should have cash that increase and decreases with buying and selling.
// The RecordCollector shouldn't be able to buy a Record if he can't afford it.
// The RecordCollector should be able to view the total value of their collection
// The RecordCollector should be able to view the total value of all records of a given Genre
// The RecordCollector should be able to view their most valuable record.
// The RecordCollector should be able to sort their records by value. (ascending or descending)
// The RecordCollector should be able to compare the value of their collection with another RecordCollec
var _ = require("lodash");
var Collector = function(cash, record) {
  this.cash = cash;
  this.collection = [];
  this.record = record;
}

Collector.prototype.collectorCash = function (cash) {
  var cash = 100;
  if(collection.length === 10){
    cash = 100;
  }
  if(collection.length === 11){
    cash = 90;
  }
  if(collection.length === 9){
    cash = 110;
  }
  return this.cash;

};

Collector.prototype.collectionValue = function () {
  var value = this.collection.reduce(function(acc, collectionValue) {
    return acc + collectionValue.value;
  }, 0)
  return value;
}



module.exports = Collector;
