angular.module('Fun').factory('Note', function($resource){
  return $resource('/notes/:id');
});
