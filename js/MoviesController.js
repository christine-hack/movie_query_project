function MoviesController(MoviesService) {
  var ctrl = this;
  ctrl.searchYear = '';
  ctrl.newTitle = '';
  ctrl.newRelease = '';
  ctrl.favorites = [];
  ctrl.watchlist = [];
  ctrl.watched = [];

  ctrl.getMovies = function (year) {
    MoviesService
      .retrieve(year)
      .then(function (response) {
        ctrl.favorites = response.data.results;
      });
  };
  
  ctrl.addMovie = function () {
    ctrl.favorites.unshift({
      title: ctrl.newTitle,
      year: ctrl.newRelease
    })
  };

  ctrl.addToWatchlist = function (movie) {
    ctrl.watchlist.push(movie);
  }

  ctrl.addToWatched = function (movie) {
    ctrl.watched.push(movie);
  }

  ctrl.removeFromWatched = function ($index, movie) {
    ctrl.watched.splice($index, 1);
  }

  ctrl.getMovies(ctrl.searchYear);
  
}

angular
  .module('app')
  .controller('MoviesController', MoviesController);
