'use strict';

app.controller('customerController', function ($scope,$window, customersService, accountService, transactionsService) {

  $scope.selectedCustomer = null;
  $scope.istransationOperation = false;

  $scope.transaction = {};
  $scope.transaction.transactionType = '';
  $scope.transaction.amount = '';
  $scope.transaction.accountId = '';

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

  $scope.showTranastionOperation = function (selectedAccount) {
    console.log(selectedAccount);
    $scope.istransationOperation = true;
  };

  $scope.doTransaction = function () {
    $scope.transaction.accountId = JSON.parse($scope.selectedAccount).id;
    var promise = transactionsService.doTransaction($scope.transaction);
    promise.then(function (response) {
      if(response.data && response.data.title === 'Transaction Operation Exception') {
        $window.alert("transaction not done");
      }
      $window.alert("transaction done");
    }, reason => {
      $window.alert(reason.message);
    });
  };
});

