angular.module('Fun').controller('UsersIndexController', function(User, $scope){
  $scope.users = User.query();
});
