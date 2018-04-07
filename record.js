


var Record = function(artist, title, genre, price) {
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
}
// concat to make a string
Record.prototype.recordProperties = function () {
  return this.artist +" "+ this.title +" "+ this.genre +" "+ this.price;

};

// Create a method that allows the store to view all Records of a given Genre.
Record.prototype.recordGenre = function () {
  return this.genre.filter(function (record) {
    return record.genre === 'Soul';
  });
}





module.exports = Record;
