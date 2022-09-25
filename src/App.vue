<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <header>
    <div id="leftBar">
      <span id="name">🐥 drozda</span>
    </div>

    <div id="rightBar">
      <nav>
        <RouterLink to="/">About me</RouterLink>
        <RouterLink to="/resume"><span>Resume</span></RouterLink>
        <RouterLink to="/projects"><span>Projects</span></RouterLink>
        <RouterLink to="/contact"><span>Contact</span></RouterLink>
      </nav>
    </div>
  </header>

  <div id="container">
    <RouterView />
  </div>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 99px;
}
#leftBar {
  text-align: left;
  float: left;
  clear: none;
  width: 50%;
  margin: auto auto auto 48px;
}
#rightBar {
  text-align: right;
  float: right;
  clear: none;
  width: 50%;
  margin: auto 28px auto auto;
}
#name {
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  font-family: "Syne";
}

nav {
  font-family: "Syne";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #1b1b1b;

  flex-flow: column wrap;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
nav a.router-link-exact-active {
  color: #170df2;
}

nav a.router-link-exact-active {
  color: #170df2;
}

nav a.router-link-exact-active:hover {
}

nav a {
  margin-right: 20px;
}

nav a {
}

#container {
  max-width: 900px;
  margin: 0 auto;
}
</style>
