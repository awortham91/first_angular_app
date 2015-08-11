angular.module('Fun').controller('NotesEditController', function(Note, $scope, Category, $location, $routeParams){
  $scope.note = Note.get({id: $routeParams.id})
  $scope.isSubmitting = false;
  $scope.categories = Category.query();

  $scope.saveNote = function(note){
    document.body.style.backgroundColor = "#D6FFD6";
    $scope.isSubmitting = true;

    note.$update().finally(function(){
      $scope.isSubmitting = false;
      $location.path("/notes/" + note.id)
      setTimeout(function(){
        document.body.style.backgroundColor = "white";
      }, 800);
    });
  }
});
