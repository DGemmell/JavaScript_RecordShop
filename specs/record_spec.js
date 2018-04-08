var assert = require('assert');
var Record = require('../record.js');

describe ('record', function() {
    var record;
    var store;

    beforeEach(function(){
      record = new Record("Otis Redding", "Dock of a Bay","Soul",10);
    })



    it("should have an artist", function() {
      assert.strictEqual(record.artist, "Otis Redding");

    });

    it("should have a title", function() {
      assert.strictEqual(record.title, "Dock of a Bay");

    });

    it("should have a genre", function() {
      assert.strictEqual(record.genre, "Soul");

    });

    it("should have a price", function() {
      assert.strictEqual(record.price, 10.00);

    });

    it("should display record details as a string", function(){
      assert.strictEqual(record.recordProperties(), "Otis Redding Dock of a Bay Soul 10")
    });

    it("should filter by record genre", function(){
      assert.strictEqual(record.recordGenre(),)
    })



});
