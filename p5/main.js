var app = angular.module("CreateFunction",[]);

app.factory('Data',function(){
	return {
		message:"I am the data from a service!"
	}
})

app.controller('firstctrl',function($scope,Data){
	$scope.data = Data;
	$scope.reverseData = function(message){
		return message.split("").reverse().join("");
	}
})

