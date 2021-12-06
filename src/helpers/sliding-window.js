// Finds the first set of sequential elements which satisfy the predicate
module.exports = function slidingWindow(collection = [], size = 0, predicate = () => false) {
  let start = -1;
  let end = 0;
  let i = 0;

  while (i < collection.length) {
    if (predicate(collection[i])) {
      if (start < 0) {
        start = i;
      }

      end = i + 1;
    } else {
      start = -1;
      end = -1;
    }

    if (end - start === size) {
      break;
    }

    i += 1;
  }

  return collection.slice(start, end);
};
