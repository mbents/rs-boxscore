(function () {
    'use strict';

    angular
        .module('app.widgets')
        .filter('namelookup', namelookup);

    namelookup.$inject = ['personservice'];

    function namelookup(personservice) {
        return function (input) {
            var person = personservice.getPersonDataById(input);
            return person ? person.FIRST + ' ' + person.LAST : input;
        }
    }

})();
