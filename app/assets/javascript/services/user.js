angular.module('Fun').factory('User', function($resource){
  return $resource('/users/:id');
});
