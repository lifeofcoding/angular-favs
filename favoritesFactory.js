angular.module('MobDucks').factory('Favorites', [
    function () {
        return {
            list: [
                {
                    category: "car",
                    type: "Audi"
                },
                {
                    category: "food",
                    type: "steak"
                },
                {
                    category: "job",
                    type: "Mobiquity"
                }
            ],
            add: function(category, type) {
                this.list.push({category: category, type: type});
            }
        };
    }
]);