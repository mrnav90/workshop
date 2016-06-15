;(function(angular) {

  'use strict';

  angular.module('Peddler', [
    'ui.router',
    'ngCookies',
    'ui.bootstrap',
    'angular-ladda',
    'ngStorage'
  ]).run(Application).config(Config)

  Application.$inject = ['$rootScope', '$location'];
  function Application($rootScope, $location) {

  }

  Config.$inject = ['laddaProvider'];
  function Config(laddaProvider) {
    laddaProvider.setOption({
      style: 'zoom-out'
    });
  }

})(angular);