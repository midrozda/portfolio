<script>
export default {
  props: ["title", "icon"],
};
</script>

<template>
  <div class="image">
    <span class="title">{{ icon }} — {{ title }}</span>
  </div>
    <slot></slot>
</template>

<style>
div {
  font-family: "Questrial";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
}
.image {
  background-image: url("@/assets/background.svg");
  width: 100vw;
  height: 208px;
  z-index: -1;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>
