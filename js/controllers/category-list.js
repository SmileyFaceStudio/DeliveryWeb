angular
  .module('app')
  .controller('CategoryList', function($scope, $http){

    /**
     *  This method just gets the categories available to us and 
     *  makes them available through CategoryList controller
     */
    $http.get('/wordpress/api/get_category_index')
    .success(function(data, status, headers, config){
        $scope.categories = data.categories;
    })
    .error(function(data, status, headers, config){
        window.alert("We have been unable to access the feed :-(");
    })

});