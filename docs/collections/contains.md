---
label: 集合
title: contains
slug: /contains
sidebar_position: 13
---

<big><b>`contains(list, value, [fromIndex])`</b></big>
&emsp;

```ts
function contains(obj, value, fromIndex?) {
  const isArray = Array.isArray(obj),
    values = isArray ? obj : Object.values(obj);

  // 内部通过 indexOf >= 0 来进行判断
  return values.indexOf(value, fromIndex || 0) >= 0;
}
```
