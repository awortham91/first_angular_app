var _ = require('lodash');

var categories = [
  {"id": 1, "name": "Unlucky"},
  {"id": 2, "name": "Depressing"},
  {"id": 3, "name": "So totally Shakespeare"},
  {"id": 4, "name": "Boring"},
  {"id": 5, "name": "Romantic"},
  {"id": 6, "name": "Witty"},
  {"id": 7, "name": "Strange"},
  {"id": 8, "name": "Random"}
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
