var _ = require('lodash');
var Category = require('./category')
var User = require('./user')
var notes = [
  {"id":1, "userId": 1, "categoryId": 1, "description": "To be or not to be that is the question", "content" : "is it better to live or die?", "title" : "to be 1"},
  {"id":2, "userId": 1, "categoryId" : 1, "description" : "Whether 'tis nobler in the mind to suffer the slings and arrows", "title" : "to be 2", "content": "just to clarify the fact that the question was a question"},
  {"id":3, "userId": 2, "categoryId": 2, "description" : "Even now, now, very now, an old black ram is topping your white ewe", "title" : "to be 3","content": "is it a bolder act"},
  {"id":4, "userId": 2, "categoryId": 2, "description" : "Rouse him. Make after him, poison his delight,", "title" : "to be 4", "content": "to eat life's shit all the time"},
  {"id":5, "userId": 3, "categoryId": 3, "description" : "Nothing will come of nothing: speak again.", "title" : "to be 5", "content": "or being unlcky to fight"},
  {"id":6, "userId": 3, "categoryId": 3, "description" : "I am a man more sinned against than sinning", "content" : "violently versus the unluck by ending your own life.", "title" : "to be 6"},
  {"id":7, "userId": 4, "categoryId": 4, "description" : "a lion among ladies is a most dreadful thing", "content" : "Bottom's comment on the problem posed by the appearance of a lion in their play.", "title" : "to be 6"},
  {"id":8, "userId": 4, "categoryId": 4, "description" : "Masters, spread yourselves.", "content" : "Bottom's order to his mates to quit crowding around Peter Quince.", "title" : "to be 6"},
  {"id":9, "userId": 5, "categoryId": 5, "description" : "he is a very valiant trencherman; he hath an excellent stomach.", "content" : "Beatrice is making fun of the absent Benedick", "title" : "to be 6"},
  {"id":10, "userId": 5, "categoryId": 5, "description" : "he wears his faith but as the fashion of his hat; it ever changes with the next block.", "content" : "According to Beatrice, Benedick has a new best friend every month", "title" : "to be 6"},
  {"id":11, "userId": 6, "categoryId": 6, "description" : "I am constant as the northern star", "content" : "Caesar tells Cassius that he cannot be moved by humble pleadings.", "title" : "to be 6"},
  {"id":12, "userId": 6, "categoryId": 6, "description" : "Et tu, Brute?", "content" : "Seeing his friend among the assassins, Caesar exclaims, 'And you, Brutus?'", "title" : "to be 6"},
  {"id":13, "userId": 7, "categoryId": 7, "description" : "Every subject’s duty is the king’s; but every subject’s soul is his own.", "content" : "violently versus the unluck by ending your own life.", "title" : "to be 6"},
  {"id":14, "userId": 7, "categoryId": 7, "description" : "For when lenity and cruelty play for a kingdom, the gentler gamester is the soonest winner.", "content" : "violently versus the unluck by ending your own life.", "title" : "to be 6"},
  {"id":15, "userId": 8, "categoryId": 8, "description" : "It will have blood; they say, blood will have blood: Stones have been known to move and trees to speak.", "content" : "violently versus the unluck by ending your own life.", "title" : "to be 6"},
  {"id":16, "userId": 8, "categoryId": 8, "description" : "To be thus is nothing, but to be safely thus.", "content" : "violently versus the unluck by ending your own life.", "title" : "to be 6"},
  {"id":17, "userId": 9, "categoryId": 1, "description" : "You are now within a foot of th' extreme verge.", "content" : "violently versus the unluck by ending your own life.", "title" : "to be 6"},
  {"id":18, "userId": 9, "categoryId": 1, "description" : "Ten masts at each make not the altitude which thou hast perpendicularly fell. Thy life's a miracle.", "content" : "violently versus the unluck by ending your own life.", "title" : "to be 6"},
  {"id":19, "userId": 10, "categoryId": 2, "description" : "I never wished to see you sorry; now I trust I shall.", "content" : "violently versus the unluck by ending your own life.", "title" : "to be 6"},
  {"id":20, "userId": 10, "categoryId": 2, "description" : "My life stands in the level of your dreams...", "content" : "violently versus the unluck by ending your own life.", "title" : "to be 6"}


]
var lastId = 6;

var buildNotes = function() {
  // Make a deep copy so we don't change the main notes array
  var rawNotes = JSON.parse(JSON.stringify(notes));
  var builtNotes = [];
  var note;

  for(var i=0, l=rawNotes.length; i < l; i++) {
    note = rawNotes[i];
    note.user = User.get(note.userId);
    note.category = Category.get(note.categoryId);
    builtNotes.push(note);
  }
  return builtNotes
}

module.exports = {
  get: function(id) {
    return _.find(buildNotes(), function(note){
      return note.id === id;
    });
  },
  all: function() {
    return buildNotes();
  },
  update: function(note) {
    var updatedNote;
    for(var i=0, l=notes.length; i < l; i++) {
      if(notes[i].id === note.id){
        _.assign(notes[i], note);
        updatedNote = notes[i];
        break;
      }
    }
    return updatedNote;
  },
  delete: function(id) {
    var deletedNote;
    for(var i=0, l=notes.length; i < l; i++) {
      if(notes[i].id === id){
        deletedNote = notes[i];
        notes.splice(i, 1);
        break;
      }
    }
    return deletedNote;
  },
  create: function(note) {
    lastId += 1;
    note.id = lastId;
    notes.push(note)
    return note;
  }
}
