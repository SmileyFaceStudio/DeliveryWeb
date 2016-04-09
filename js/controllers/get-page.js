/**
 *
 *	Set up a controller called GetPage which is referenced by the
 *	routing set up above. We are passing a URL (using $location.url()) 
 *	to the API in order to retrieve information for the specific page
 *
 */
angular
  .module('app')
  .controller('GetPage', function($scope, $rootScope, $http, $location){

	/**
	 *	Perform a GET request on the API and pass the slug to it using $location.url()
	 *	On success, pass the data to the view through $scope.page
	 */
	$http.get('/wordpress/api/get_page/?slug=' + $location.url())
    .success(function(data, status, headers, config){
        $scope.page = data.page;

        // Inject the title into the rootScope
        $rootScope.title = data.page.title;
    })
    .error(function(data, status, headers, config){
        window.alert("We have been unable to access the feed :-(");
    })

});