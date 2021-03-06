angular.module('Fun').controller('NotesCreateController', function($scope, Note, Category, User, $location){
  $scope.note = new Note();
  $scope.isSubmitting = false;
  $scope.categories = Category.query();
  $scope.users = User.query();

  $scope.saveNote = function(note){
    $scope.isSubmitting
    note.$save().then(function(){
      $location.path("/notes");
    }).finally(function(){
      $scope.isSubmitting = false;
    });
  }
});
