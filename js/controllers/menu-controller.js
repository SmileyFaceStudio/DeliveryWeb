/**
 *
 *	On runtime define the page titles for injecting into the page <title> tag
 *
 */

angular
  .module('app')
  .controller('MenuController', function($scope, $location){
    $scope.isActive = function(route) {
       return route === $location.url();
    }
});