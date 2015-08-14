var _ = require('lodash');
var Category = require('./category')
var User = require('./user')
var notes = [
  {"id":1, "userId": 1, "categoryId": 1, "description": "To be or not to be that is the question", "content" : "is it better to live or die?", "title" : "to be 1"},
  {"id":2, "userId": 1, "categoryId" : 1, "description" : "Whether 'tis nobler in the mind to suffer the slings and arrows", "title" : "to be 2", "content": "just to clarify the fact that the question was a question"},
  {"id":3, "userId": 2, "categoryId": 2, "description" : "Even now, now, very now, an old black ram is topping your white ewe", "title" : "to be 3","content": "is it a bolder act"},
  {"id":4, "userId": 2, "categoryId": 2, "description" : "Rouse him. Make after him, poison his delight,", "title" : "to be 4", "content": "to eat life's shit all the time"},
  {"id":5, "userId": 3, "categoryId": 3, "description" : "adfsdfasdf", "title" : "to be 5", "content": "or being unlcky to fight"},
  {"id":6, "userId": 3, "categoryId": 3, "description" : "exxexgxregxw", "content" : "violently versus the unluck by ending your own life.", "title" : "to be 6"},
  {"id":7, "userId": 4, "categoryId": 4, "description" : "tyujrtv", "content" : "violently versus the unluck by ending your own life.", "title" : "to be 6"},
  {"id":8, "userId": 4, "categoryId": 4, "description" : "nykbyujv", "content" : "violently versus the unluck by ending your own life.", "title" : "to be 6"},
  {"id":9, "userId": 5, "categoryId": 5, "description" : "qxety", "content" : "violently versus the unluck by ending your own life.", "title" : "to be 6"},
  {"id":10, "userId": 5, "categoryId": 5, "description" : "cr cr cwrge rtc", "content" : "violently versus the unluck by ending your own life.", "title" : "to be 6"},
  {"id":11, "userId": 6, "categoryId": 6, "description" : "etvhsthc m", "content" : "violently versus the unluck by ending your own life.", "title" : "to be 6"},
  {"id":12, "userId": 6, "categoryId": 6, "description" : "a end them", "content" : "violently versus the unluck by ending your own life.", "title" : "to be 6"},
  {"id":13, "userId": 7, "categoryId": 7, "description" : "against a sea of tem", "content" : "violently versus the unluck by ending your own life.", "title" : "to be 6"},
  {"id":14, "userId": 7, "categoryId": 7, "description" : "agaixrecgerxgz end them", "content" : "violently versus the unluck by ending your own life.", "title" : "to be 6"},
  {"id":15, "userId": 8, "categoryId": 8, "description" : "and by opposing end them", "content" : "violently versus the unluck by ending your own life.", "title" : "to be 6"},
  {"id":16, "userId": 8, "categoryId": 8, "description" : "against a sewergwerzgfg end them", "content" : "violently versus the unluck by ending your own life.", "title" : "to be 6"}


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
