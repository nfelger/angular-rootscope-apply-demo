//var AradAppModule = angular.module('arad', []);
var AradAppModule = angular.module('arad', ['angulartics']);

AradAppModule.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('', {
            templateUrl: '/template.html',
            controller: 'TopLevel'
        });
}]);


AradAppModule.run(['$rootScope', function($rootScope) {
//    $rootScope.$apply(function(){ });
}]);


AradAppModule.controller('TopLevel', ['$rootScope', '$scope', function($rootScope, $scope) {
}]);

