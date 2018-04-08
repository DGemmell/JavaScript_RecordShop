var assert = require('assert');
var Collector = require('../collector.js');
var Store = require('../store');
var Record = require('../record.js');

describe ('Collector', function() {
    var cash;
    var collection;
    var record;

    beforeEach(function(){
      collector = new Collector(100);
      record = new Record("Otis Redding", "Dock of a Bay","Soul",10);
    })

    it("should have cash", function() {
      assert.strictEqual(collector.cash, 100);

    });

    it("should have a collection of records", function() {
      assert.strictEqual(collector.collection,[10]);

    });

    it("should be able to buy record with cash", function() {
      collector.cash;
      collector.collectorCash(record);
      assert.strictEqual(collector.collection,[11]);
    });

    it("should be able to sell a record", function() {
      collector.cash;
      collector.collectorCash(record);
      assert.strictEqual(collector.collection,[9]);
    });

    it("should show the collection value", function() {
      collector.collectorCash(record);
      assert.equal(collector.collectionValue, 110);
    });

});
