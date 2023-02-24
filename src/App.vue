<template>
  <div class="container">
    <div class="row">
      <img />
    </div>
  </div>
  <Chats />
</template>

<script>
import Chats from "./components/Chats.vue";
export default {
  name: "App",
  components: { Chats },
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
</style>
