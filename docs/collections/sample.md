---
label: 集合
title: sample
slug: /sample
sidebar_position: 21
---

<big><b>`sample(list, [n])`</b></big>
&emsp;

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="1" label="sample">
  ```ts
  function sample(obj, n?) {
    // 1. 如果没传递n，直接返回随机值
    if (!n) {
      return obj[random(0, obj.length - 1)];
    }

    // 2. 获取前置数据
    const isArray = Array.isArray(list),
      collection = isArray ? list : Object.values(list),
      length = collection.length,
      last = length - 1;
    
    // 3. n 的取值范围
    n = Math.max(Math.min(n, length), 0);

    // 4. 遍历集合
    for (let i = 0; i < collection.length; i++) {
      const rand = random(i, last);
      
      // 5. 交互数组位置
      const temp = collection[i];
      collection[i] = collection[rand];
      collection[rand] = temp;
    }

    // 6. 返回原数组
    return list;
  }
  ```
  </TabItem>
  <TabItem value="2" label="random">
  ```ts
  function random(min, max) {
    /*
      3. 生成 i - last 的随机数
        3.1 +min 包含最小值
        3.2 Math.random() * (max + 1 - min) 包含最大值 -min代表，不能超过 min
    */
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  }
  ```
  </TabItem>
</Tabs>
