'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('bankApp'));

  var CustomerController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CustomerController = $controller('customerController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
