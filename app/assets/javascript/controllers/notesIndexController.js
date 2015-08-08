angular.module('Fun').controller('NotesIndexController', function(Note, $scope){
  $scope.notes = Note.query();
});
