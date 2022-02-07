'use strict';

app.controller('accountController', function ($scope,$window, accountService) {
  getAllAccounts();

  function getAllAccounts() {
    var promise = accountService.getAccounts();
    promise.then(function (response) {
      $scope.products = response.data;
    }, reason => {
      $window.alert(reason.message);
    });
  };

  $scope.getAccountById = function () {
    var id = 1;
    var promise = accountService.getAccountById(id);
    promise.then(function (response) {
      $scope.searchedAccount = response.data;
    }, reason => {
      $window.alert(reason.message);
    });
  };


});

