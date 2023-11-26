---
title: ComponentA
comment: false
editLink: false
prev: false
next: false
order: 1
---

## 示例

::: vue-playground ComponentA
@file App.vue

```vue

<script lang="ts" setup>
  import {ComponentA} from 'vue3-library-template'
  import {onMounted} from "vue";

  onMounted(() => {
    console.log(ComponentA)
  })
</script>
<template>
  <ComponentA />
</template>
<style>
  @import "http://localhost:8080/lib/style.css";
</style>
```
@import

```json
{
  "imports": {
    "vue3-library-template": "http://localhost:8080/lib/{{repo_name}}.es.js"
  }
}
```
:::
