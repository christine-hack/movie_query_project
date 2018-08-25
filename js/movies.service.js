function MoviesService($http) {

    var searchApi = '//api.themoviedb.org/3/search/movie?api_key=ae522e81cd433e6b31e34f7dac1122ef&query=';
    var api = '//api.themoviedb.org/3/discover/movie?api_key=ae522e81cd433e6b31e34f7dac1122ef&sort_by=popularity.desc&include_adult=false&primary_release_year=';

    function create() { };
    function search() { };
    function retrieve(year) {
        return $http.get(api+year).then(function (response) {
            return response;
        });
    };
    function update() { };
    function remove() { };

    return {
        create: create,
        search: search,
        retrieve: retrieve,
        update: update,
        remove: remove
    };

}

angular
    .module('app')
    .factory('MoviesService', MoviesService);