---
label: 集合
title: toArray
slug: /toArray
sidebar_position: 22
---

<big><b>`toArray(list)`</b></big>
&emsp;

```ts
function size(list) {
  // 1. 无效值 -> 0
  if (list == null) return 0;
  // 2. 数组返回长度，否 keys 的长度
  return Array.isArray(list) ? list.length : Object.keys(list).length;
}
```
