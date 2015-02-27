var MD = angular.module('MobDucks', [/** Inject dependencies here **/]);

MD.config([ // Config stuff here
    function() {

    }
]);


/**
 * I made MainController so the json blob will show on the front page by itself
 */
MD.controller('MainController', ['Favorites',
    function(Favorites) {
        this.favorites = Favorites.list;
    }
]);