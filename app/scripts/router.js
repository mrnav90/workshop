;(function(angular) {

  'use strict';

  angular.module('Peddler').config(ConfigRouter);

  ConfigRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
  function ConfigRouter($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('!');
    $urlRouterProvider.otherwise('/signIn');

    $stateProvider
      .state('signIn', {
        url: '/signIn',
        templateUrl: 'templates/SignIn.html',
        controller: 'AuthController',
        controllerAs: 'AuthCtrl',
        resolve: {
          isAuthenticated: function(Auth, $location, $timeout) {
            if (Auth.isAuthenticated()) {
              $timeout(function() {
                $location.path('/products');
              }, 100)
            }
          }
        }
      })
      .state('dashboard', {
        url: '/',
        abstract: true,
        templateUrl: 'templates/Dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'DashboardCtrl',
        resolve: {
          isAuthenticated: function(Auth, $location, $timeout) {
            if (!Auth.isAuthenticated()) {
              $timeout(function() {
                $location.path('/signIn');
              },100)
            }
          }
        }
      })
      .state('dashboard.product', {
        url: 'products',
        views: {
          'dashboard': {
            templateUrl: 'templates/ListProducts.html',
            controller: 'ProductController',
            controllerAs: 'ProductCtrl'
          }
        }
      })
      .state('dashboard.user', {
        url: 'users',
        views: {
          'dashboard': {
            templateUrl: 'templates/ListUsers.html',
            controller: 'UserController',
            controllerAs: 'UserCtrl'
          }
        }
      })
  }
})(angular);