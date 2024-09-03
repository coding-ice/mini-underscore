---
label: 集合
title: map
slug: /map
sidebar_position: 2
---

<big><b>`map(list, iteratee, [context])`</b></big>
&emsp;

```ts
function map(obj, iteratee, context) {
  const isArray = Array.isArray(obj),
    keys = !isArray && Object.keys(obj),
    len = (keys || obj).length,
    res = Array(len);

  for (let i = 0; i < len; i++) {
    const currentKey = isArray ? i : keys[i];
    res[i] = iteratee.apply(context, [obj[currentKey], currentKey, obj]);
  }

  return res;
}

const res = map([1, 2, 3], (v) => v * 2); // [2, 4, 6]
```

走读代码

- 首先我们要了解，`list` 和 `obj` 的本质区别是它们的 “key” 不同 即（`index， key`）
- 通过判断是否是数组，拿到对应的 `len`，以及创建已知长度的数组（性能是更高的，因为数组是一块连续的内存）
- 通过 `apply` 调用 `iteratee` 且绑定 `ctx` 拿到对应的返回值且赋值给 `res`
- 最后返回 `res`
