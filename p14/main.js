var app = angular.module('twitterApp',[]);

app.controller('appCtrl',function($scope){
    $scope.loadingTweets = function(){
        alert("loading tweets");
    }
})

app.directive('enter',function(){
    return function(scope,element,attrs){
        element.bind('mouseenter',function(){
            scope.$apply(attrs.enter);
        })
    }
})