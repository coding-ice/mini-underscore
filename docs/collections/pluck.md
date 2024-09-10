---
label: 集合
title: pluck
slug: /pluck
sidebar_position: 15
---

<big><b>`pluck(list, propertyName)`</b></big>
&emsp;

```ts
function pluck(list, propertyName) {
  // 返回对应的 item[propertyName] 即可
  return map(list, (item, key) => item[propertyName]);
}
```
