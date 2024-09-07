import each from "./each";

function every(list, predicate?, context?) {
  predicate =
    predicate ||
    function (val) {
      return val;
    };

  let signial = true;

  each(list, (value, key, obj) => {
    if (!predicate.apply(context, [value, key, obj])) signial = false;
  });

  return signial;
}

export default every;
