var Movie = /** @class */ (function () {
  function Movie(title, rate) {
    this.title = title;
    this.rate = rate;
  }
  Movie.introduction = function () {
    console.log("I belong to Movie Class.");
  };
  return Movie;
})();
var movie = new Movie("Joker", 8.9);
Movie.introduction();
