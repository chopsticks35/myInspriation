'use strict';

angular.module('myInspiration.quotes', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/quotes', {
    templateUrl: 'quotes/quotes.html',
    controller: 'QuotesCtrl'
  });
}])

.controller('QuotesCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
    var ref = new Firebase('https://inspirationalquotes.firebaseio.com/quotes');
    
    //init firebase
    $scope.quotes = $firebaseArray(ref);

    //click add button - show form and clear past data
    $scope.showAddForm = function(){
        $scope.addFormShow = true;
    };
    
    //hide upon clicking
    $scope.hide = function(){
        $scope.addFormShow = false;
    };
    
    //must have value for all variable, even if null - setting to null if none, for firebase
    $scope.addFormSubmit = function(){
        
        //asign values
        if ($scope.author){var author = $scope.author;}
        else {var author = null;}
        if ($scope.text){var text = $scope.text;}
        else {var text = null;}
        if ($scope.subject){var subject = $scope.subject;}
        else {var subject = null;}
        if ($scope.rating){var rating = $scope.autho;r}
        else {var rating = null;}
        
        //build object
        $scope.quotes.$add({
            author:author,
            text: text,
            subject: subject,
            rating: rating
            
        }).then(function(ref){
            //assign primary key
            var id = ref.key();
            console.log("added quote with id" + id);
            
            //clear form
            clearFiends();
            
            //hide form
            $scope.addFormShow = false;
            
            //send message
         $scope.msg = 'Quote added';
            
        });
            
}]);