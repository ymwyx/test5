function double_to_one(collection) {
  var arr = [];
  var i, j = 0, k = 0;

  for (i = 0; i < collection.length; i++) {
    if (collection[i][0] == undefined)
      arr.push(collection[i]);
    else {
      for (j = 0; isNaN(collection[i][j]) != 1; j++) {
        arr.push(collection[i][j]);
      }
    }
  }
  var len = arr.length;
  for (i = len - 1; i > 0; i--) {
    for (j = 0; j < len - 1; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(i, 1);
        break;
      }
    }
    len--;
  }

  return (arr);
}

module.exports = double_to_one;
