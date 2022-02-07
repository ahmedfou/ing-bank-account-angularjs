'use strict';

app.controller('transactionController', function ($scope,  $window, customersService, accountService, transactionsService) {

  $scope.istransationOperation = false;

  init();

  function init() {
    var promise = customersService.getCustomers();
    promise.then(function (response) {
      $scope.customers = response.data;
    }, reason => {
      $window.alert(reason.message);
    });
  }


  $scope.getAccountsByCustomersId = function () {
    var parsedCustomer = JSON.parse($scope.selectedCustomer);
    var promise = accountService.getAccountsByCustomersId(parsedCustomer.id);
    promise.then(function (response) {
      $scope.customerAccounts = response.data;
    }, reason => {
      $window.alert(reason.message);
    });
  };

  $scope.showTranastionsHistory = function () {
    var parsedAccount = JSON.parse($scope.selectedAccount);
    var promise = transactionsService.getTransactionsByAccountId(parsedAccount.id);
    promise.then(function (response) {
      $scope.transactions = response.data;
    }, reason => {
      $window.alert(reason.message);
    });
  };


});

