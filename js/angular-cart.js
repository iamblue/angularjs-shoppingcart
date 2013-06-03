/**
 * shopping cart Example 0.0.1
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
    numbers:1,
    del:0
  },{
    num:1,
    productname:'嘴砲車',
    singleprice:799,
    thistotalprice:799,
    numbers:1,
    del:0

  },{
    num:2,
    productname:'救護車',
    singleprice:799,
    thistotalprice:799,
    numbers:1,
    del:0
  }
  ];
//計算初始總價
  var z = 0,
    totalprice =0;
  for (z; z<data.length;z++){
    totalprice = data[z].thistotalprice+totalprice
  }
//計算初始總價 end

var cartshopping = angular.module('cartshopping', []);
cartshopping.factory('Data',function(){
  return data
})
function showcase($scope,Data){
  $scope.cartdatas = Data;
  $scope.deletethis = function (total,no){
   // console.log($scope);
    if($scope.cartdatas[no].del == 0){
      $scope.caculatecount = $scope.caculatecount-$scope.cartdatas[no].thistotalprice;
      $scope.cartdatas[no].del = 1;
    }else{
      $scope.cartdatas[no].del = 0;
      $scope.caculatecount = $scope.caculatecount+$scope.cartdatas[no].thistotalprice;
    }
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
  $scope.caculatecount = totalprice ;
}

/*  directive 是angularJS 2-data-bindng 精隨 */
cartshopping.directive("delete",function(){
  return function (scope,element,attrs){
    console.log(attrs);
    console.log('yoyoy:'+scope.caculatecount);
    element.bind('click',function(){
      //console.log(scope.deletethis);
      if(element.hasClass('active')){
        element.removeClass('active');
        var a = element.parent();
        a.parent().removeClass('done-true');
      }else{
        element.addClass('active');
        var a = element.parent();
        a.parent().addClass('done-true');
      }
      console.log('oh,yo!');
    })
  }
  //另外一種寫法，比較不會跟$scope搞混
  // return {
  //   link: function($scope,element,attes){
  //     console.log('yoyoy:'+$scope.caculatecount)
  //     element.bind('click',function(){
  //     //console.log(scope.deletethis);
  //     if(element.hasClass('active')){
  //       element.removeClass('active');
  //       var a = element.parent();
  //       a.parent().removeClass('done-true');
  //     }else{
  //       element.addClass('active');
  //       var a = element.parent();
  //       a.parent().addClass('done-true');
  //     }
  //     console.log('oh,yo!');
  //   })
  //   }
  // }
})
