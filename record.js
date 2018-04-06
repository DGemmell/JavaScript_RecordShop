// Create a method that prints out the Record's properties as a string.


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





module.exports = Record;
