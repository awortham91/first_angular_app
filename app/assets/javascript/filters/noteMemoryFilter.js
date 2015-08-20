angular.module("Fun").filter('noteMemoryFilter', function(){
  return function(collection) {
    var newCollection = [];
    var newUsers = [];
    while (newCollection < 8) {
      var newNum = Math.floor(Math.random() * collection.length)
      if ($.inArray(newNum, newCollection < 0)) {
        newCollection.push(newNum);
      };
    };

    for(var i=0; i < newCollection.length; i++) {
      newUsers.push(collection[newCollection[i]]);
    };
var newCollection = [1,2,3,4]
    return newCollection;
  };
});
