---
label: 集合
title: each
slug: /each
---

<big><b>`each(list, iteratee, [context])`</b></big>
&emsp;

```ts
function each(obj, iteratee, context) {
  const isArray = Array.isArray(obj);

  if (isArray) {
    for (let i = 0; i < obj.length; i++) {
      iteratee.apply(context, [obj[i], i, obj]);
    }
  } else {
    const keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
      iteratee.apply(context, [obj[keys[i]], keys[i], obj]);
    }
  }

  return obj;
}
```

走读代码

1. 如果是数组，调用 `iteratee` 时，实参分别为 `value index obj`
2. 如果是对象，调用 `iteratee` 时，实参分别为 `value key obj`
3. 调用 `iteratee`，采用 `apply` ，把 `ctx` 绑定到 `iteratee` 中
