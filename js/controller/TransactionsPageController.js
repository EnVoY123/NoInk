/*jslint browser: true*/
/*global console, MyApp*/

MyApp.angular.controller('TrasactionsPageController', ['$scope', '$http', 'InitService', function ($scope, $http, InitService) {
  'use strict';
  
  var transactions = [];

  InitService.addEventListener('ready', function () {
    // DOM ready
      console.log('TrasactionsPageController: ok, DOM ready');

    // You can access angular like this:
      // MyApp.angular

    
    // And you can access Framework7 like this:
    // MyApp.fw7.app
  });
  $scope.getTransactions = function (cardNumber) {
      //code for getting transactions
     transactions = getTransaction(cardNumber);
  }

  function getTransaction(restriction) {
      //code for getting transactions
  }


}]);