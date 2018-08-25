function MoviesController(MoviesService) {
  var ctrl = this;
  ctrl.searchYear = '';
  ctrl.newTitle = '';
  ctrl.newRelease = '';
  ctrl.favorites = [];

  ctrl.getMovies = function (year) {
    console.log(year)
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

  ctrl.getMovies(ctrl.searchYear);
  
}

angular
  .module('app')
  .controller('MoviesController', MoviesController);
