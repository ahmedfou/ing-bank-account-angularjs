'use strict';

var app = angular.module('bankApp', ['ngRoute']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
  $routeProvider
    .when('/accounts',
      {
        controller: 'accountController',
        templateUrl: 'views/accounts.html'
      })
    .when('/customers',
      {
        controller: 'customerController',
        templateUrl: 'views/customers.html'
      })
    .when('/transactions',
      {
        controller: 'transactionController',
        templateUrl: 'views/transactions.html'
      })
    .otherwise({ redirectTo: '/' });
});
