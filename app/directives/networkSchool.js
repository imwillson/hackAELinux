angular.module('collegeride').directive('networkSchool', function() {
    return {
        scope: {
            src: '='
        },
        restrict: 'E',
        templateUrl: '../templates/networkSchool.html'
    }
});