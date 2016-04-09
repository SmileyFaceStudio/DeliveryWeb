angular
  .module('app')
  .controller('BlogPost', function($scope, $rootScope, $http, $routeParams){

    /**
     *  Call the get_post method from the API and pass to it the 
     *  value of $routeParams.post, which is actually the post slug
     */
    $http.get('/wordpress/api/get_post/?slug=' + $routeParams.post)
    .success(function(data, status, headers, config){
        $scope.post = data;
        $scope.comments = data.post.comments;

        // Inject the title into the rootScope
        $rootScope.title = data.post.title;
    })
    .error(function(data, status, headers, config){
        window.alert("We have been unable to access the feed :-(");
    })

});