<script setup>
import TabTheme from "../components/TabTheme.vue";
</script>
<script>
export default {
  props: ["title", "icon"],
};
</script>

<template>
  <TabTheme :icon="icon" :title="title">
    <div id="TabContent">
      <slot></slot>
    </div>
  </TabTheme>
</template>

<style>
#TabContent {
  padding: 40px 38px 40px 38px;
  border: 3px solid #1b1b1b;
  top: -25px;
  position: relative;
  background: white;
}
</style>
