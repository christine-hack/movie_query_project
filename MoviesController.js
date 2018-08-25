function MoviesController(MoviesService) {
  var ctrl = this;
  ctrl.newTitle = '';
  ctrl.newRelease = '';
  ctrl.favorites = [];

  function getMovies() {
    MoviesService
      .retrieve()
      .then(function (response) {
        ctrl.favorites = response;
      });
  }

  ctrl.onChange = function () {
    console.log('Change!', ctrl.newTitle);
  };
  
  ctrl.addMovie = function () {
    ctrl.favorites.unshift({
      title: ctrl.newTitle,
      year: ctrl.newRelease
    })
  };

  getMovies();
  
}

angular
  .module('app')
  .controller('MoviesController', MoviesController);
