/*jslint browser: true*/
/*global console, MyApp*/

MyApp.angular.controller('TransactionsPageController', ['$scope', '$http', 'InitService', 'SharedScopes', function ($scope, $http, InitService, SharedScopes) {
  'use strict';
  SharedScopes.setScope('TransactionsPageController', $scope);
  $scope.transactions = getTransaction()
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

  function getTransaction() {
    var transactions = []
    $.ajaxSetup({async: false});
    $.getJSON("http://85.188.14.184:4000/api/cards/3/transactions.json", function(data){
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
