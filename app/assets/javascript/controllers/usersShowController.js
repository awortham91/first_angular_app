angular.module('Fun').controller('UsersShowController', function(User, $scope, $routeParams){
  $scope.user = User.get({id: $routeParams.id});
});
