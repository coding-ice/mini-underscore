---
label: 集合
title: invoke
slug: /invoke
sidebar_position: 14
---

<big><b>`invoke(list, methodName, *arguments)`</b></big>
&emsp;

```ts
function invoke(list, methodName, ...args) {
  return map(list, (item) => item[methodName](...args));
}
```
