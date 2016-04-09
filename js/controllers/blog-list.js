angular
  .module('app')
  .controller('BlogList', function($scope, $rootScope, $http, $routeParams){

    /** 
     *  Get the parameter passed into the controller (if it exists)
     *  and then construct the GET URL. If parameter exists, the user
     *  is looking at a specific category.
     */
    if($routeParams.category)
    {
        /**
         *  Get posts from a specific category by passing in the slug
         */
        var url = $http.get('/wordpress/api/get_category_posts/?slug=' + $routeParams.category);
    }
    else
    {
        if($routeParams.page)
        {
            /**
             *  If a page parameter has been passed, send this to the API
             */
            var url = $http.get('/wordpress/api/get_posts/?page=' + $routeParams.page);
        }
        else
        {
            /**
             *  If no parameter supplied, just get all posts
             */
            var url = $http.get('/wordpress/api/get_posts');

            // Set a default paging value
            $scope.page = 1;
            // Set a default next value
            $scope.next = 2;

            // Inject the title into the rootScope
            $rootScope.title = 'Blog';
        }
    }
    url
    .success(function(data, status, headers, config){
        /**
         *  Pass data from the feed to the view.
         *  $scope.posts will pass exclusively post data
         *  $scope.paging will pass the whole feed and will be used to work out paging
         */
        $scope.posts = data.posts;
        $scope.paging = data;
        //console.log(data);

        // Inject the title into the rootScope
        // $rootScope.title = data.category.title;

        if($routeParams.page)
        {
            // Get current page
            $scope.page = $routeParams.page;
            // Caluculate next/previous values
            $scope.next = parseInt($routeParams.page)+1;
            $scope.prev = parseInt($routeParams.page)-1;
        };
    })
    .error(function(data, status, headers, config){
        window.alert("We have been unable to access the feed :-(");
    })

});