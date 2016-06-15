;(function(angular) {

  'use strict';

  angular.module('Peddler').controller('UserController', UserController);

  UserController.$inject = [];
  function UserController() {
    var self = this;
    self.input = {
      username: null,
      email: null,
      password: null,
      displayname: null,
      created: (new Date()).getFullYear() + '-' + (new Date()).getMonth() + '-' + (new Date()).getDate()
    }
    self.createLoading = false;
    self.create = create;

    function create() {

    }
    
  }

})(angular);