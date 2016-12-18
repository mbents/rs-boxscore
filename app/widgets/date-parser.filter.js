(function () {
    'use strict';

    angular
        .module('app.widgets')
        .filter('dateparser', function () {
            return function (input) {
                if (input) {
                    var dateStr = input.toString();
                    var year = dateStr.substring(0, 4);
                    var month = dateStr.substring(4, 6);
                    var day = dateStr.substring(6);
                    return new Date(year + '-' + month + '-' + day);
                }
            }
        })
})();
