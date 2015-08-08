angular.module('Fun').controller('NotesEditController', function(Note, $scope, $routeParams){
  $scope.note = Note.get({id: $routeParams.id})
  $scope.isSubmitting = false;
  $scope.saveNote = function(note){
    document.body.style.backgroundColor = "#D6FFD6";
    $scope.isSubmitting = true;
    note.$update().finally(function(){
      $scope.isSubmitting = false;
      setTimeout(function(){
        document.body.style.backgroundColor = "white";
      }, 700);
    });
  }
});
