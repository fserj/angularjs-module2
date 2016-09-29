(function () {
'use strict';


angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;
  toBuyList.items = ShoppingListCheckOffService.getToBuyList();

  toBuyList.buyItem = function(itemIndex){
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var boughtList = this;
  boughtList.items = ShoppingListCheckOffService.getBoughtList();
}

function ShoppingListService(){
  var service = this;

  var toBuy = [
    { name: "cookies", quantity: 1 },
    { name: "bread", quantity: 2 },
    { name: "plums", quantity: 3 },
    { name: "oranges", quantity: 4 },
    { name: "apple", quantity: 5 }
  ];

  var bought = [];


  service.getToBuyList = function(){
    console.log("getToBuyList method called ");
    return toBuy;
  }

  service.getBoughtList = function(){
    console.log("getBoughtList called "+bought);
    return bought;
  }

  service.buyItem = function(index){
    var item = toBuy[index];
    toBuy.splice(index,1);
    bought.push(item);
  }
}

})();
