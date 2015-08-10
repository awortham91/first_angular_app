angular.module('Fun').factory('Category', function($resource){
  return $resource('/categories/:id');
});
