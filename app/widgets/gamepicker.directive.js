(function () {
    'use strict';

    angular
        .module('app.widgets')
        .directive('gamepicker', gamepicker);

    function gamepicker() {
        return {
            restrict: 'E',
            templateUrl: 'app/widgets/gamepicker-template.html',
            controller: 'mainController'
        };
    }
})();
