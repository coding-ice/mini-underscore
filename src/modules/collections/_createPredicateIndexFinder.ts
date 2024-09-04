function _createPredicateIndexFinder(dir) {
  return (list, predicate, context) => {
    predicate = predicate.bind(context);
    const len = list.length;
    let idx = dir > 0 ? 0 : len - 1;

    for (; idx >= 0 && idx < len; idx += dir) {
      if (predicate(list[idx], idx, list)) {
        return idx;
      }
    }

    return -1;
  };
}

export default _createPredicateIndexFinder;
