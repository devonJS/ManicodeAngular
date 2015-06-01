'use strict';

angular.module('myApp.ngCsp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ngCsp', {
    templateUrl: '/ngCsp/ngCsp.html',
    controller: 'ngCspCtrl'
  });

}])

.controller('ngCspCtrl', ['$scope', function($scope) {
}]);