angular.module('Fun').directive('funPageNav', function(){
  return {
    replace: true,
    restrict: "E",
    templateUrl: "assets/templates/directives/funPageNav.html",
    controller: function($scope, $location){
      $scope.isPage = function(name){
        return new RegExp("/" + name + "($|/)").test($location.path());
      };
    }
  };
});
