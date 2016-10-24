var app = angular.module("behaviorApp",[]);

app.directive('E', function(){
    return function(scope,element){
        element.bind('mouseenter', function(){
            console.log("I am inside of you!");
        })
    }
})

app.directive('L', function(){
    return function(scope,element){
        element.bind('mouseleave', function(){
            console.log("I am leaving");
        })
    }
})