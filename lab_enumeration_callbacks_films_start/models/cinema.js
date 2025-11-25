const Cinema = function (films) {
  this.films = films;

  Cinema.prototype.getFilmTitles = function() {
    return this.films.map((film) => film.title);
  }

  Cinema.prototype.getFilmByTitle = function(filmToFind) {
    return this.films.filter((film) => film.title === filmToFind);
  }

  Cinema.prototype.getAllFilmsByGenre = function(genreToFind) {
    return this.films.filter((film) => film.genre === genreToFind);
  }

  Cinema.prototype.getFilmsByYear = function(year) {
    return this.films.filter((film) => film.year === year);
  }

  Cinema.prototype.confirmAllFilmsAreOverAParticularLength = function(length) {
    let result = true;
    this.films.forEach((film) => { 
      if (result === true) {
        if (film.length > length) {
          result = false;
        }
    }})
    return result;
  }

  Cinema.prototype.getTotalFilmLength = function() {
    return this.films.reduce((totalRunningTime, film) => 
      totalRunningTime + film.length
    , 0);
  }
};

module.exports = Cinema;
