'use strict';

angular.module('myInspiration.quotes', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/quotes', {
    templateUrl: 'quotes/quotes.html',
    controller: 'QuotesCtrl'
  });
}])

.controller('QuotesCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
console.log($scope);
}]);