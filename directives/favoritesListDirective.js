/**
 * Setup the mobFavoritesList directive and inject Person factory
 */
angular.module('MobDucks').directive('mobFavoritesList', [
    function() {
        return {
            restrict: "AE",
            controller: 'FavoritesListController as favCtrl', // cast as favCtrl for data binding
            templateUrl: "templates/favoritesListTemplate.html" // this can also be a function if need be
        }
    }
]);

angular.module('MobDucks').controller('FavoritesListController', ['Favorites',
    function(Favorites) {
        this.favorites = Favorites.list; // retrieve Favorites.list
    }
]);