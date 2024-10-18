---
position: 9
label: 数组
title: first
slug: /first
sidebar_position: 1
---

<big><b>`first(array, [n])`</b></big>
&emsp;

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="first" label="first" default>
  ```ts
    function first(array: any[] | ArrayLike<any>, n?) {
      if (array == null || array.length < 1) return;
      if (n == null) return array[0];
      return _initial(array, array.length - n);
    }
  ```
  </TabItem>
  <TabItem value="initial" label="initial">
  ```ts
    function _initial(array: any[] | ArrayLike<any>, n) {
      return Array.prototype.slice.call(
        array,
        0,
        array.length - (n == null ? 1 : n)
      );
    }
  ```
  </TabItem>
</Tabs>
```
