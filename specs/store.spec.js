var assert = require('assert');
var Store = require('../store.js');
var Record = require('../record.js');

describe ('Store', function() {
    var name;
    var city;
    var stock;
    var balance;
    var record;

    beforeEach(function(){
      store = new Store("Alans Record Shop", "Glasgow", 50.00);
      record = new Record("Otis Redding", "Dock of a Bay","Soul",10.00);
    })

    it("should have a name", function() {
      assert.strictEqual(store.name, "Alans Record Shop");

    });

    it("should have a city", function() {
      assert.strictEqual(store.city, "Glasgow");

    });

    it("should have stock", function() {
      assert.strictEqual(store.stock[0]);

    });

    it("should have a balance", function() {
      assert.strictEqual(store.balance, 50.00);

    });

    it("should be able to add a record", function(){
      store.addRecord(record);
      assert.strictEqual(store.stock[0], record);
    })



});
