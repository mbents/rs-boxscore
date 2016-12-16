(function () {
    'use strict';

    angular
        .module('app.boxscore')
        .controller('boxscoreController', boxscoreController);

    boxscoreController.$inject = ['$scope', '$routeParams', 'boxscoreservice', 'personservice'];

    function boxscoreController($scope, $routeParams, boxscoreservice, personservice) {
        var boxscore = boxscoreservice.getBoxscoreDataByGameId($routeParams.gameId);
        // TODO: access object that contains all teh data and use it to populate boxscore.html
        $scope.boxscore = boxscore;

        personservice.readFile().then(function (data) {
            console.log(data);
        });
    }

})();
