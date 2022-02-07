'use strict';

app.service('transactionsService', function ($http) {

  this.getTransactionsByAccountId = function (accountId) {
    return $http.get("http://localhost:9090/api/transactions/account/" + accountId);
  };

  this.doTransaction = function (transaction) {
    return $http.post("http://localhost:9090/api/transactions", transaction);
  };

});
