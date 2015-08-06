angular.module('Fun').controller('NotesIndexController', function(){
  $scope.notes = Note.query();

  console.log($scope.notes)
});
