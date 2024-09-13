---
label: 集合
title: toArray
slug: /toArray
sidebar_position: 22
---

<big><b>`toArray(list)`</b></big>
&emsp;

```ts
function toArray(obj) {
  // 数组 || 类数组对象
  if (Array.isArray(obj) || obj?.length) {
    return Array.from(obj);
  }

  // 对象，拿 value 即可
  return map(obj, (val) => val);
}
```
