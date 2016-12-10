(function () {
    'use strict';

    angular
        .module('boxscoreApp', [
            'ngRoute',
            'app.main',
            'app.boxscore',
            'app.services',
            'app.widgets'
        ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/main/main.html',
                    controller: 'mainController'
                })

                .when('/boxscore/:gameId', {
                    templateUrl: 'app/boxscore/boxscore.html',
                    controller: 'boxscoreController'
                })
        });
})();
