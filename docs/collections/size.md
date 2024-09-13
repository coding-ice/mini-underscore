---
label: 集合
title: size
slug: /size
sidebar_position: 23
---

<big><b>`size(list)`</b></big>
&emsp;

```ts
function toArray(obj) {
  // 1. 数组 || 类数组对象
  if (Array.isArray(obj) || obj?.length) {
    return Array.from(obj);
  }

  // 2. 对象，拿 value 即可
  return map(obj, (val) => val);
}
```
