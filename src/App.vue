<template>
  <NavbarComp />
  <router-view class="content" />
</template>

<script>
import NavbarComp from "./components/NavbarComp.vue";
export default {
  name: "App",
  components: { NavbarComp },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
#app {
  font-family: Arial, Helvetica, sans-serif;
}
body {
  margin: 0px;
}
.content {
  margin-top: 100px;
  margin-left: 3px;
  margin-right: 3px;
}
</style>
