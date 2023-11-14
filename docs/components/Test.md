---
title: Test
comment: false
editLink: false
prev: false
next: false
order: 1
---

## 简介

在Vue3中,双向数据绑定主要通过`v-model`指令实现.`v-model`指令在底层实际上做了以下操作:

```html

<MyChild v-model="someRef"/>
<!-- 等同于 -->
<MyChild :modelValue="someRef" @update:modelValue="someRef = $event"/>
```

## 自定义属性名

默认情况下,`v-model`的属性名是`modelValue`,事件名是`update:modelValue`.
要分配多个独立的`v-model`指令,你可以通过***在名字后面添加冒号来改变默认的属性和事件名***,例如:

```html

<MyChild v-model="someRef" v-model:other-name="someRef"/>
<!-- 等同于 -->
<MyChild :modelValue="someRef" @update:modelValue="someRef = $event"
         :otherName="someRef" @update:otherName="someRef = $event"/>
```

## 示例

::: vue-playground Vue 自定义组件实现双向绑定
@file App.vue

```vue

<script lang="ts" setup>
  import Child from './CustomComponent.vue'
  import {ref} from 'vue'

  const someRef = ref(2)
</script>
<template>
  <div>父组件中的值: {{someRef}}</div>
  <button @click="someRef = someRef+1">改变父组件中的值</button>
  <Child v-model="someRef"/>
</template>

```

@file CustomComponent.vue

```vue

<script lang="ts" setup>
  import {computed} from "vue";

  interface Props {
    modelValue: number
  }

  const props = withDefaults(defineProps<Props>(), {
    modelValue: 1
  })

  const emit = defineEmits(['update:modelValue'])

  const modelValue = computed({
    get() {
      return props.modelValue
    },
    set(value) {
      emit('update:modelValue', value)
    }
  })
</script>

<template>
 <div>子组件中的值: {{modelValue}}</div>
  <button @click="modelValue = modelValue+1">改变子组件中的值</button>
</template>
```

:::


:::
