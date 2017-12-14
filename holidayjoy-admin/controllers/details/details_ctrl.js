app.controller('anchorcontroll',function($scope,$location,$anchorScroll){
    $scope.scrollTo = function(scrollLocation){
          $location.hash(scrollLocation);
         $anchorScroll();
    }
});