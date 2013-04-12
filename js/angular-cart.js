/**
 * shopping cart Module 0.1.0
 *
 * Description Blue Chen 2013.04 (@YouMeb inc)
 * Source:
 */


//一開始抓取data請先滿足一下格式 
var data = [{
    num:0,
    productname:'娃娃車',
    singleprice:400,
    thistotalprice:400,
    numbers:1
  },{
    num:1,
    productname:'嘴砲車',
    singleprice:799,
    thistotalprice:799,
    numbers:1
  },{
    num:2,
    productname:'救護車',
    singleprice:799,
    thistotalprice:799,
    numbers:1
  }
  ];

var cartshopping = angular.module('cartshopping', []);

cartshopping.factory('Data',function(){
  return data
})


function showcase($scope,Data){
  $scope.cartdatas = Data;
  
  $scope.deletethis = function (total,no){

    $scope.caculatecount = $scope.caculatecount-$scope.cartdatas[no].thistotalprice;
  }
  $scope.countthis = function (nums,price,no){
    $scope.this.cartdatas[no].thistotalprice = nums*price
    var i = 0;
    var a = 0;
    for(i;i<$scope.this.cartdatas.length;i++){
      a= a+($scope.this.cartdatas[i].thistotalprice);
      console.log(a);
      $scope.caculatecount =a;
    }
  }
  //計算初始總價
  var z = 0; 
  var totalprice =0;
  for (z; z<Data.length;z++){
    totalprice = Data[z].thistotalprice+totalprice
  }
  //計算初始總價 end
  $scope.caculatecount = totalprice ;
}
