// angular.module("Fun").filter('noteMemoryFilter', function(){
//   return function(collection) {
//
//     function uniq(array) {
//       var result = [];
//       for (var i = 0; i < array.length; i++) {
//           if (result.indexOf(array[i]) == -1) {
//               result.push(array[i]);
//           }
//       }
//       return result;
//     };
//
//
//     // function shuffle(array) {
//     //   var m = array.length, t, i;
//     //
//     //   while (m) {
//     //     i = Math.floor(Math.random() * m--);
//     //
//     //     t = array[m];
//     //     array[m] = array[i];
//     //     array[i] = t;
//     //   }
//     //   return array;
//     // }
//
//     function shuffle(array) {
//       var l = array.length
//       var editedArray = array;
//       var result = [];
//       for (var i = 0; i < l; i++) {
//         random = Math.floor(Math.random() * editedArray.length);
//         result.push(editedArray[random]);
//         editedArray.splice(random, 1);
//       }
//       return result
//     };
//
//     var notes = collection
//     var userIds = [];
//     var l = notes.length
//     for (i = 0; i < l; i++) {
//       userIds.push(notes[i].userId);
//     };
//     var userIds = shuffle(uniq(userIds)).slice(0, 8);
//     var scrambledNotes = shuffle(notes)
//
//     // var newCollection = [];
//     //
//     // for (i = 0; i < 16; i++) {
//     //   var l = array.length
//     //   var newNum = Math.floor(Math.random() * l)
//     //   newCollection.push(array[newNum]);
//     //   array.splice(newNum, 1);
//     // }
//
//   //   var newish = [];
//     // for (i = 0; i < 16; i++) {
//   //     var newNum = collection[i]
//   //     console.log(collection[i].userId)
//   //     newish.push(newNum);
//   //   }
//   console.log(scrambledNotes)
//     return collection;
//   }
// });
