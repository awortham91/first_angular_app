angular.module('Fun').directive('funPageNav', function(){
  return {
    replace: true,
    restrict: "E"
    templateUrl: "assets/templates/directives/funPageNav.html",
    controller: function($scope){}
  };
});
