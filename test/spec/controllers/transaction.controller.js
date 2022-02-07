'use strict';

describe('Controller: transactionController', function () {

  // load the controller's module
  beforeEach(module('bankApp'));

  var TransactionController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TransactionController = $controller('transactionController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
