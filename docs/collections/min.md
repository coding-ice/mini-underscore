---
label: 集合
title: max
slug: /max
sidebar_position: 16
---

<big><b>`max(list, [iteratee], [context])`</b></big>
&emsp;

```ts
function min(obj, iteratee?, context?) {
  const isArray = Array.isArray(obj);
  let result = Infinity,
    lastComputed = Infinity;

  if (!iteratee) {
    const values = isArray ? obj : Object.values(obj);
    for (let i = 0; i < values.length; i++) {
      if (values[i] < lastComputed) {
        const value = values[i];
        lastComputed = value;
        result = value;
      }
    }
  } else {
    each(obj, (...args) => {
      const computed = iteratee.apply(context, args);
      if (computed < lastComputed) {
        lastComputed = computed;
        result = args[0];
      }
    });
  }

  return result;
}
```

- 大部分等同于 max ，只是 `computed < lastComputed` 不同
