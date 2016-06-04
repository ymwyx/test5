'use strict';
function double_to_one(collection) {
  var arr = [];
  var i, j, k = 0;

  for (i = 0; i < collection.length; i++) {
    if (collection[i][0] == undefined)
      arr.push(collection[i]);
    else {
      for (j = 0; isNaN(collection[i][j]) != 1; j++) {
        arr.push(collection[i][j]);
      }
    }
  }

  return (arr);
}
module.exports = double_to_one;



