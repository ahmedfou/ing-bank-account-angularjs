'use strict';

describe('Controller: accountController', function () {

  // load the controller's module
  beforeEach(module('bankApp'));

  var AccountController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountController = $controller('accountController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
