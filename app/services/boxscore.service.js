(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('boxscoreservice', boxscoreservice);

    boxscoreservice.$inject = ['$http'];

    function boxscoreservice($http) {
        var svc = {};

        svc.boxscoreData = [];

        svc.readFile = function (file) {
            var promise = $http.get('http://localhost:3000/boxscore?f=' + file).then(function (response) {
                svc.boxscoreData = response.data;
                return response.data;
            }, function (response) {
                return response;
            });
            return promise;
        }

        svc.getBoxscoreData = function () {
            return svc.boxscoreData;
        }

        svc.getBoxscoreDataByGameId = function (gameId) {
            return svc.boxscoreData.find(function (item) {
                return item.game_id == gameId;
            });
        }

        return svc;
    }

})();
