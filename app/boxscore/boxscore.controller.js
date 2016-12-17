(function () {
    'use strict';

    angular
        .module('app.boxscore')
        .controller('boxscoreController', boxscoreController);

    boxscoreController.$inject = ['$scope', '$routeParams', 'boxscoreservice', 'personservice'];

    function boxscoreController($scope, $routeParams, boxscoreservice, personservice) {
        personservice.readFile().then(function (data) {
            var boxscore = boxscoreservice.getBoxscoreDataByGameId($routeParams.gameId);
            $scope.boxscore = boxscore;
        });
    }

})();
