angular.module('Fun').controller('MemoryIndexController', function(User, Note, $scope){
  var allUsers = User.query();
  $scope.users = allUsers
  var allNotes = Note.query(function(data) {



  $scope.toggled = false;
  $scope.ready = false;
  var chosenCards = []
  var matchedCards = []

  function uniq(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (result.indexOf(array[i]) == -1) {
            result.push(array[i]);
        }
    }
    return result;
  };

  function shuffle(array) {
    var l = array.length
    var editedArray = array;
    var result = [];
    for (var i = 0; i < l; i++) {
      random = Math.floor(Math.random() * editedArray.length);
      result.push(editedArray[random]);
      editedArray.splice(random, 1);
    }
    return result
  };

  var userIds = [];
  var l = allNotes.length
  for (i = 0; i < l; i++) {
    userIds.push(allNotes[i].userId);
  };
  var userIds = shuffle(uniq(userIds)).slice(0, 8);
  var scrambledNotes = shuffle(allNotes)
  var memoryNotes = []

  var first = false
  for (var i = 0; i < userIds.length; i++) {
    for (var j = 0; j < scrambledNotes.length; j++) {
      if(userIds[i] === scrambledNotes[j].userId && first === false) {
        memoryNotes.push(scrambledNotes[j])
      } else if (userIds[i] === scrambledNotes[j].userId && first === true) {
        memoryNotes.push(scrambledNotes[j])
        first = false
        break
      };
    };
  };

  $scope.notes = shuffle(memoryNotes)

  function makeAllFalse() {
    $scope.toggled = false;
    $scope.ready = false;
  }

  function checkForCards(noteId){
    for (var i = 0, len = chosenCards.length; i < len; i++) {
      if (chosenCards[i] === noteId) {
        console.log('chosencards error')
          return false;
      };
    };
    for (var i = 0, len = matchedCards.length; i < len; i++) {
      if (matchedCards[i] === noteId) {
        console.log('matchedcards error')
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
              document.getElementById(firstCard.id).className = "memory_index_correct";
              document.getElementById("memory_index_card_" + card.id).className = "col-md-3 memory_index_card_correct";
              document.getElementById("memory_index_card_" + firstCard.id).className = "col-md-3 memory_index_card_correct";
              makeAllFalse()
            } else {
              x = document.getElementsByClassName("memory_index_card")
              for (var i = 0, len = x.length; i < len; i++) {
                x[i].style.opacity = "0.5";
              }
              x = document.getElementsByClassName("memory_index_card_correct")
              for (var i = 0, len = x.length; i < len; i++) {
                x[i].style.opacity = "0.5";
              }
              document.getElementById("memory_index_continue").style.visibility = "visible";
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
      x = document.getElementsByClassName("memory_index_card")
      for (var i = 0, len = x.length; i < len; i++) {
        x[i].style.opacity = "1";
      }
      x = document.getElementsByClassName("memory_index_card_correct")
      for (var i = 0, len = x.length; i < len; i++) {
        x[i].style.opacity = "1";
      }
      document.getElementById("memory_index_continue").style.visibility = "hidden";
      makeAllFalse()
    }
  }
  })
});
