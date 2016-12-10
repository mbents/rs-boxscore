(function () {
    'use strict';

    angular
        .module('app.main')
        .controller('mainController', mainController);

    mainController.$inject = ['$scope', 'boxscoreservice'];

    function mainController($scope, boxscoreservice) {
        $scope.main = getMainModel();
        $scope.main.teams = getTeams();
        $scope.main.years = function (min, max, step) {
            step = step || 1;
            var input = [];
            for (var i = min; i <= max; i += step) {
                input.push(i);
            }
            return input;
        }

        $scope.getBoxscore = function () {
            var file = 'C:\\retrosheet\\bgame\\' + $scope.main.selectedYear.trim() + $scope.main.selectedTeam.trim() + '.csv';
            boxscoreservice.readFile(file).then(function (data) {
                $scope.main.games = data;
            });
        }
    }

})();
