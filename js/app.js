angular.module('app', ['ngRoute', 'ngAnimate', 'ngSanitize'])

/**
 *
 *	Configure our app
 *
 */
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider)
{
	/**
	 *	Configure routes
	 */
    $routeProvider
    .when('/', {
        templateUrl: '/partials/home.html',
        controller: 'GetPage'
    })
    .when('/about', {
    	templateUrl: '/partials/page.html',
    	controller: 'GetPage'
    })
    .when('/services', {
    	templateUrl: '/partials/page.html',
    	controller: 'GetPage'
    })
    .when('/blog', {
        templateUrl: '/partials/blog.html',
        controller: 'BlogList'
    })
    .when('/blog/page/:page', {
        templateUrl: '/partials/blog.html',
        controller: 'BlogList'
    })
    .when('/blog/:category', {
        templateUrl: '/partials/blog.html',
        controller: 'BlogList'
    })
    .when('/blog/:category/:post', {
        templateUrl: '/partials/post.html',
        controller: 'BlogPost'
    });

    /**
     *	Remove # from the URL with $locationProvider
     */
     $locationProvider.html5Mode(true).hashPrefix('!');
}]);
