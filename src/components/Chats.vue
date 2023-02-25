<template>
  <div class="container">
    <div class="hamberger" @click="chatListDisplay = !chatListDisplay">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div
      v-if="chatListDisplay"
      class="chat-list"
      style="overflow-y: scroll; height: 90dvh"
    >
      <div class="cart" v-for="user in users" :key="user.id">
        <div class="signle-user" @click="showChat(user.id)">
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
        <p class="remove" @click="removeChatHistory(user.id)">
          Delete chat history
        </p>
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
      chatListDisplay: true,
      id: null,
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    showChat(id) {
      this.id = id;
      this.chatDisplay = false;
      if (this.windowWidth < 768) {
        this.chatListDisplay = false;
      }
      setTimeout(() => (this.chatDisplay = true), "100");
    },
    getUser(id) {
      return this.users.filter((u) => u.id === id)[0];
    },
    removeChatHistory(id) {
      this.chatDisplay = false;
      setTimeout(
        () => (this.users = this.users.filter((u) => u.id !== id)),
        "100"
      );
    },
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => (this.users = json));
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },

  components: { Chat },
};
</script>

<style scoped>
.hamberger {
  padding: 3px;
  position: absolute;
  top: -40px;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  z-index: 4;
}
.hamberger div {
  width: 2rem;
  height: 0.5rem;
  margin: 2px;
  background: #393a3b;
  border-radius: 5px;
}
.container {
  display: flex;
  align-items: flex-start;
  position: relative;
}
.chat_img {
  max-width: 100px;
  border-radius: 50%;
}
.cart {
  max-width: 500px;
  background-color: rgb(109, 151, 155);
  border-radius: 5px;
  margin-right: 20px;
  border: 1px solid rgb(60, 93, 96);
  position: relative;
}

.signle-user {
  display: flex;
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

.remove {
  cursor: pointer;
  background-color: rgb(22, 92, 98);
  color: #fff;
  width: fit-content;
  border-radius: 5px;
  display: none;
  padding: 2px;
  font-size: 0.5rem;
}
.cart:hover > .remove {
  display: inline;
  position: absolute;
  right: 5px;
  top: -5px;
  z-index: 2;
}

@media only screen and (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
</style>
