var app=angular.module('holidayjoy',["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
      templateUrl : "home.html"
    })
    .otherwise({
        redirectTo: "/home"
    });
  });

  app.controller('holidaycontroller', function($scope, $rootScope){



  });
