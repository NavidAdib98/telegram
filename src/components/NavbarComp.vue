<template>
  <ul class="container">
    <li>
      <router-link to="/">profile</router-link>
    </li>
    <li>
      <router-link to="/chats">chats</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavbarCopm",
};
</script>

<style scoped>
.container {
  display: flex;
  background-color: rgb(139, 157, 168);
  list-style-type: none;
  width: 100%;
  margin: 0px 0px 90px 0px;
  position: fixed;
  z-index: 10;
  top: 0px;
}
li {
  margin: 15px 10px;
}
li a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
}

li a:hover {
  color: #d5b4b4;
}
</style>
