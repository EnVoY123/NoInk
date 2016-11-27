/*jslint browser: true*/
/*global console, MyApp*/

MyApp.angular.controller('TransactionsPageController', ['$scope', '$http', 'InitService', 'SharedScopes', function ($scope, $http, InitService, SharedScopes) {
  'use strict';
  SharedScopes.setScope('TransactionsPageController', $scope);
  $scope.getTransactions = function(id){
    $scope.transactions = fetchTransaction(id)
  }
  $scope.fetchReceipt = function(card_id, id){
    $scope.receipt = getReceipt(card_id, id)
    SharedScopes.getScope('GeneralController').fetchReceiptData();

  }
  InitService.addEventListener('ready', function () {
    // DOM ready
    console.log('TrasactionsPageController: ok, DOM ready');
    // You can access angular like this:
      // MyApp.angular
    // up vote

    // And you can access Framework7 like this:
    // MyApp.fw7.app
  });

  function fetchTransaction(id) {
    var transactions = []
    $.ajaxSetup({async: false});
    $.getJSON("http://85.188.14.184:4000/api/cards/" + id + "/transactions.json", function(data){
      transactions = data;
    });
    return transactions
  }

  function getReceipt(card_id, id){
    var receipt;
    $.ajaxSetup({async: false});
    $.getJSON("http://85.188.14.184:4000/api/cards/"+ card_id + "/transactions/" + id +".json", function(data){
      receipt = data.receipt.url;
    });
    return receipt

  }

}]);
