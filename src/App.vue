<template>
  <h1>App</h1>
  <MyProfile />
  <Chat />
</template>

<script>
import MyProfile from "./components/MyProfile.vue";
import Chat from "./components/Chat.vue";
export default {
  name: "App",
  components: { MyProfile, Chat },
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
