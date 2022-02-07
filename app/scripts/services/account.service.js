'use strict';

app.service('accountService', function ($http) {

  this.getAccounts = function () {
    return $http.get("http://localhost:9090/api/accounts");
  };

  this.getAccountsByCustomersId = function (customerId) {
    return $http.get("http://localhost:9090/api/accounts/customer/" + customerId);
  };

  this.getAccountById = function (accountId) {
    return $http.get("http://localhost:9090/api/accounts/" + accountId);
  };

  this.getAccountBalanceByAccountId = function (accountId) {
    return $http.get("http://localhost:9090/api/accounts/" + accountId + '/balance');
  };

});
