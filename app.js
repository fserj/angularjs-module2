(function () {
'use strict';


angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', ToBuyController)
.service('ShoppingListCheckOffService',ShoppingListService)

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;
  toBuyList.items = ShoppingListCheckOffService.getToBuyList();
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){

}

function ShoppingListService(){
  var service = this;

  var toBuy = [
    { name: "cookies", quantity: 10 },
    { name: "bread", quantity: 10 },
    { name: "apple", quantity: 10 }
  ];
  var bought = [];


  service.getToBuyList = function(){
    return toBuy;
  }
}

})();
