var _ = require('lodash');
var Category = require('./category')
var User = require('./user')
var notes = [
  {"id":1 ,"userId": 1, "categoryId": 3, "description": "To be or not to be", "content" : "is it better to live or die?", "title" : "to be 1"},
  {"id":2 ,"userId": 1, "categoryId" : 4, "description" : "That is the question", "title" : "to be 2", "content": "just to clarify the fact that the question was a question"},
  {"id":3 ,"userId": 1, "categoryId": 3, "description" : "Whether 'tis nobler in the mind", "title" : "to be 3","content": "is it a bolder act"},
  {"id":4 ,"userId": 1, "categoryId": 1, "description" : "to suffer the slings and arrows", "title" : "to be 4", "content": "to eat life's shit all the time"},
  {"id":5 ,"userId": 1, "categoryId": 1, "description" : "of outrageous fortune or to take arms", "title" : "to be 5", "content": "or being unlcky to fight"},
  {"id":6 ,"userId": 1, "categoryId": 2, "description" : "against a sea of troubles and by opposing end them", "content" : "violently versus the unluck by ending your own life.", "title" : "to be 6"}
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
