'use strict';

app.service('customersService', function ($http) {

  this.getCustomers = function () {
    return $http.get("http://localhost:9090/api/customers");
  };

});
