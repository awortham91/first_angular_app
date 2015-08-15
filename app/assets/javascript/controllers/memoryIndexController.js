angular.module('Fun').controller('MemoryIndexController', function(User, Note, $scope){
  $scope.users = User.query();
  $scope.notes = Note.query();
  $scope.toggled = false;
  $scope.ready = false;

  $scope.toggleTime = function(cards) {
    if(!$scope.toggled){
      var card = Note.get({id: cards}, function() {
        document.getElementById(cards).innerHTML = card["description"]
        $scope.toggled = true;
      });
    } else if($scope.toggled && !$scope.ready) {
      var card = Note.get({id: cards}, function() {
        document.getElementById(cards).innerHTML = card["description"]
        $scope.ready = true;
      });
    } else {
      x = document.getElementsByClassName("memory_index_card_quote")
      for (var i = 0, len = x.length; i < len; i++) {
        x[i].innerHTML = "pick me!"
      }

      $scope.toggled = false;
      $scope.ready = false;
    }
  }
});
