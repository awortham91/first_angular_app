angular.module('Fun').controller('MemoryIndexController', function(User, Note, $scope){
  $scope.users = User.query();
  $scope.notes = Note.query();
  $scope.toggled = false;

//   function toggleTime(card) {
//     console.log('hi')
//     // if($scope.toggled = false) {
//     //   $scope.toggled
//     //   console.log(card)
//     // }
//   }
// });


    $scope.toggleTime = function(card) {
         console.log('Hello ' + card);
    }

});
