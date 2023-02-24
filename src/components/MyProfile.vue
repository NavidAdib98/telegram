<template>
  <div class="container">
    <img
      class="profile_img"
      src="./../../public/images/profile_image.webp"
      v-bind:alt="'pic'"
    />
    <div class="info">
      <p><span class="title">Username:</span> {{ username }}</p>
      <p><span class="title">Email: </span> {{ email }}</p>
      <p><span class="title">Phone: </span> {{ phone }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyProfile",
  data() {
    return {
      username: "navid_ad1998",
      email: "nadib1998@gmail.com",
      phone: "09360203244",
      profileImg: "./../../public/images/profile_image.webp",
    };
  },
};
</script>
<style scoped>
.container {
  background-color: rgb(150, 171, 173);
  border: 1px solid  rgb(109, 151, 155);
  width: fit-content;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  box-shadow: 10px 10px 5px #aaaaaa;
}
.profile_img {
  max-width: 200px;
  border-radius: 10px;
}
.info {
  padding: 0 0 0 5px;
}
.title {
  font-weight: bold;
}
</style>
