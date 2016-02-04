'use strict';

// Declare app level module which depends on views, and components
//set up firebase and quotes module as dependencies
angular.module('myInspiration', [
  'ngRoute',
  'firebase',
  'myInspiration.quotes'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/quotes'});
}]);
