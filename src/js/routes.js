'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
	    .state('login', {
                url: '/',
                templateUrl: 'templates/login.html',
		controller: 'LoginCtrl'
            })
	    .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html',
		controller: 'MasterCtrl'
            })
	    .state('home.dashboard', {
                url: '/dashboard',
                templateUrl: 'templates/dashboard.html'
            })
            .state('home.tables', {
                url: '/tables',
                templateUrl: 'templates/tables.html'
            });
    }
]);
