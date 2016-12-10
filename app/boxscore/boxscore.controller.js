(function () {
    'use strict';

    angular
        .module('app.boxscore')
        .controller('boxscoreController', boxscoreController);

    boxscoreController.$inject = ['$scope', '$routeParams', 'boxscoreservice'];

    function boxscoreController($scope, $routeParams, boxscoreservice) {
        //console.log($routeParams.gameId);
        var boxscore = boxscoreservice.getBoxscoreDataByGameId($routeParams.gameId);
        //console.log(boxscore);
        // TODO: access object that contains all teh data and use it to populate boxscore.html
        $scope.boxscore = boxscore;
    }

})();
