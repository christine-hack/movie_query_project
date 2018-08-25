function MoviesService($http) {

    var api = '//www.omdbapi.com/?i=tt3896198&apikey=ce98a36c&';

    function create() { };
    function retrieve() {
        return $http.get(api).then(function (response) {
            return response;
        });
    };
    function update() { };
    function remove() { };

    return {
        create: create,
        retrieve: retrieve,
        update: update,
        remove: remove
    };

}

angular
    .module('app')
    .factory('MoviesService', MoviesService);