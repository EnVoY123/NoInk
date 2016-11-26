/*jslint browser: true*/
/*global console, MyApp*/

MyApp.angular.controller('TransactionsPageController', ['$scope', '$http', 'InitService', function ($scope, $http, InitService) {
  'use strict';
    $scope.message = "hello"
    $scope.transactions = getTransaction()
  InitService.addEventListener('ready', function () {
    // DOM ready
      console.log('TrasactionsPageController: ok, DOM ready');
    $scope.transactions = getTransaction()
    // You can access angular like this:
      // MyApp.angular
    // up vote

    // And you can access Framework7 like this:
    // MyApp.fw7.app
  });

  function getTransaction() {
    var transactions = []
    $.ajaxSetup({async: false});//同期通信(json取ってくるまで待つ)
    $.getJSON("http://85.188.14.228:4000/api/cards/3/transactions.json", function(data){
      transactions = data;
    });
    return transactions
  }

}]);
