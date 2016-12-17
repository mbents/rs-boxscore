(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('personservice', personservice);

    personservice.$inject = ['$http'];

    function personservice($http) {
        var svc = {};

        svc.personData = [];

        svc.readFile = function () {
            var file = 'C:\\retrosheet\\ids\\rs_ids_2016.csv';
            var promise = $http.get('http://localhost:3000/person?f=' + file).then(function (response) {
                svc.personData = response.data;
                return response.data;
            }, function (response) {
                return response;
            });
            return promise;
        }

        svc.getPersonData = function () {
            return svc.personData;
        }

        svc.getPersonDataById = function (id) {
            return svc.personData.find(function (item) {
                return item.ID == id;
            });
        }

        return svc;
    }

})();
