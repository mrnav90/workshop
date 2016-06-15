;(function(angular) {

  'use strict';

  angular.module('Peddler').controller('ProductController', ProductController);

  ProductController.$inject = [];
  function ProductController() {
    var self = this;
    self.input = {
      name: null,
      price: null,
      description: null
    }
    self.createLoading = false;
    self.create = create;


    function create() {

    }
    
  }

})(angular);