var app = angular.module('CreateFilter',[]);

app.factory('Data',function(){
	return {
		message:"I am the data from a service!"
	}
})

app.filter('reverse',function(){
	return function(text) {
		return text.split("").reverse().join("");
	}
})
app.controller('firstctrl',function($scope,Data){
	$scope.data = Data;
	// $scope.reverseData = function(message){
	// 	return message.split("").reverse().join("");
	// }
})

