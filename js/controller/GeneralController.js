/*jslint browser: true*/
/*global console, MyApp*/

MyApp.angular.controller('GeneralController', ['$scope', '$http', 'InitService', 'SharedScopes', function ($scope, $http, InitService, SharedScopes) {
  'use strict';
  
  console.log(SharedScopes)
  SharedScopes.setScope('GeneralController', $scope);
  $scope.fetchReceiptData = function(){
      $scope.receipt = SharedScopes.getScope("TransactionsPageController").receipt
      $("#receipt_image_area").append("<img id='receipt_image_id' class='receipt_image' src=" + $scope.receipt + " />" )
  }
  InitService.addEventListener('ready', function () {
    // DOM ready
  //  console.log('DetailPageController: ok, DOM ready');

    // You can access angular like this:
    // MyApp.angular
    
    // And you can access Framework7 like this:
    // MyApp.fw7.app
  });
  
  function activatePaymentTimeout() {
       angular.element('#pay').triggerHandler('click');          
  }

}]);
