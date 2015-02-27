/**
 * Setup mob-favorite-item directive, gets called with ng-repeat in templates/favoritesListTemplate.html
 */
angular.module('MobDucks').directive('mobFavoriteItem', [
    function() {
        /**
         * Params are injected, this is here to link the attributes passed in the hardcoded call in index.html
         * It checks for attributes matching category and type and sets them to scope
         * @param scope
         * @param element
         * @param attributes
         */
        var link = function(scope, element, attributes) {
            if (attributes.category && attributes.type)
                scope.fav = {category: attributes.category, type: attributes.type}; // mimic the ng-repeat in templates/favoritesListTemplate.html
        };
        return {
            restrict: "AE",
            replace: false,
            templateUrl: "templates/favoriteItemTemplate.html",

            // This is called initially; you can also return an object with pre and post attributes containing functions
            compile: function(element, attributes, transclude) {
                return link;
            }
        }
    }
]);