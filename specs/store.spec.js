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
      record1 = new Record("Otis Redding", "Dock of a Bay","Soul",10.00);
      record2 = new Record("Ella Fitzgerald", "Dream a little Dream","Soul",12.00);
      record3 = new Record("Chuck Berry", "Never can tell", "Soul", 14.00);
    })

    it("should have a name", function() {
      assert.strictEqual(store.name, "Alans Record Shop");

    });

    it("should have a city", function() {
      assert.strictEqual(store.city, "Glasgow");

    });

    it("should have stock", function() {
      assert.strictEqual(store.stock[4]);

    });

    it("should have a balance", function() {
      assert.strictEqual(store.balance, 50.00);

    });

    it("should be able to add record", function(){
      assert.strictEqual(store.addRecord[0], stock);
    });

    it("should be able to list all stock", function(){
      assert.strictEqual(store.listStock[0], record);
    });

    it("should be able to sell stock", function(){
      assert.strictEqual(store.sellARecord[3], stock);
    });

    it('should find the store balance', function() {
      store.addRecord(record1);
      store.addRecord(record2);
      store.addRecord(record3);
      assert.equal(store.storeBalance, 86);
    });



});
