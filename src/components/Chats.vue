<template>
  <div class="container">
    <div>
      <div
        class="signle-user"
        v-for="user in users"
        :key="user.id"
        @click="showChat(user.id)"
      >
        <img
          class="chat_img"
          src="./../../public/images/profile_image_list.jpeg"
          v-bind:alt="'pic'"
        />
        <div>
          <h3>{{ user.name }}</h3>
          <h6>{{ user.phone }}</h6>
        </div>
      </div>
    </div>
    <Chat class="chat" v-if="chatDisplay" :user="getUser(id)" />
  </div>
</template>

<script>
import Chat from "./Chat.vue";
export default {
  name: "ChatsPage",
  data() {
    return {
      users: [],
      chatDisplay: false,
      id: null,
    };
  },
  methods: {
    showChat(id) {
      this.id = id;
      this.chatDisplay = false;
      setTimeout(() => (this.chatDisplay = true), "100");
    },
    getUser(id) {
      return this.users.filter((u) => u.id === id)[0];
    },
    removeChatHistory(id) {
      this.chatDisplay = false;
      setTimeout(
        () => (this.users = this.users.filter((u) => u.id !== id)),
        "150"
      );
    },
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => (this.users = json));
  },
  components: { Chat },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: flex-start;
}
.chat_img {
  max-width: 100px;
  border-radius: 50%;
}
.signle-user {
  width: 500px;
  background-color: rgb(109, 151, 155);
  display: flex;
  border: 1px solid rgb(60, 93, 96);
  border-radius: 5px;
  margin-right: 20px;
}
.signle-user:hover {
  background-color: rgb(164, 186, 188);
  cursor: pointer;
  transition: all 1s;
}
.signle-user div {
  flex-direction: column;
  padding: 5px;
}
</style>
