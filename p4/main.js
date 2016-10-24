var app = angular.module("SharingDataUsingService",[]);

app.factory('Data',function(){
	return {
		message:"I am the data from a service!"
	}
})

app.controller('firstctrl',function($scope,Data){
	$scope.data = Data;
})

app.controller('secondctrl',function($scope,Data){
	$scope.data = Data;
})