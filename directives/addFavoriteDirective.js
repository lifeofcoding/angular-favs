/**
 * I created a directive for the addTemplate functionality as well
 */
angular.module('MobDucks').directive('mobAddFavorite', [
    function() {
        return {
            restrict: "AE",
            replace: false,
            templateUrl: "templates/addFavoriteTemplate.html",
            controller: 'AddFavoriteController as addCtrl',
            bindToController: true
        }
    }
]);

angular.module('MobDucks').controller('AddFavoriteController', ['Favorites',
    function(Favorites) {
        this.addFavorite = function() {
            Favorites.add(this.newCategory, this.newType);

            // clear the form
            this.newCategory = "";
            this.newType = "";
        }
    }
])