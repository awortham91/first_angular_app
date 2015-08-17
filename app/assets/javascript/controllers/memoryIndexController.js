angular.module('Fun').controller('MemoryIndexController', function(User, Note, $scope){
  $scope.users = User.query();
  $scope.notes = Note.query();
  $scope.toggled = false;
  $scope.ready = false;
  var chosenCards = []
  var matchedCards = []

  function checkForCards(noteId){
    for (var i = 0, len = chosenCards.length; i < len; i++) {
      if (chosenCards[i] === noteId) {
          return false;
      };
    };
    for (var i = 0, len = chosenCards.length; i < len; i++) {
      if (matchedCards[i] === noteId) {
          return false;
      };
    };
    return true
  }

  $scope.toggleTime = function(cards) {
    if(!$scope.toggled){
      var card = Note.get({id: cards}, function() {
        if(checkForCards(card.id)){
          document.getElementById(cards).innerHTML = card["description"]
          $scope.toggled = true;
          chosenCards.push(card.id)
        };
      });
    } else if($scope.toggled && !$scope.ready) {
      var card = Note.get({id: cards}, function() {
        if(checkForCards(card.id)){
          document.getElementById(cards).innerHTML = card["description"]
          $scope.ready = true;
          var firstCard = Note.get({id: chosenCards[0]}, function() {
            if(card.user.id === firstCard.user.id){
              matchedCards.push(card.id)
              matchedCards.push(firstCard.id)
              document.getElementById(card.id).className = "memory_index_correct";
              document.getElementById(firstCard.id).className = "memory_index_corrct";
            }
          });
          chosenCards = []
        };
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
