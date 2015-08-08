var _ = require('lodash');

var categories = [
  {"id": 1, "name": "Unlucky"},
  {"id": 2, "name": "Depressing"},
  {"id": 3, "name": "So totally Shakespeare"},
  {"id": 4, "name": "Boring"},
  {"id": 5, "name": "Use with Caution"},
  {"id": 6, "name": "Question"},
  {"id": 7, "name": "Best Practice"},
  {"id": 8, "name": "Code Snippet"}
]

module.exports = {
  get: function(id) {
    return _.find(categories, function(category){
      return category.id === id;
    });
  },
  all: function() {
    return categories;
  }
}
