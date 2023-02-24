<template>
  <br />
  <div class="container">
    <div class="chat-box">
      <div class="one-chat" v-for="item in messages" :key="item.id">
        {{ item.text }}
        <button class="remove" @click="removeText(item.id)">x</button>
      </div>
      <br />
    </div>
    <div class="last-item">
      <input class="input" type="text" placeholder="Message" v-model="msg" />
      <button class="button" @click="addData">
        <img class="send-img" src="./../../public/images/send.png" alt="send" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatPage",
  data() {
    return {
      msg: "",
      id: 0,
      messages: [],
    };
  },
  methods: {
    addData() {
      if (this.msg) {
        this.messages.push({ id: this.id++, text: this.msg });
        this.msg = "";
      }
    },
    removeText(id) {
      this.messages = this.messages.filter((item) => item.id !== id);
    },
  },
};
</script>

<style scoped>
.chat-box {
  overflow-y: scroll;
  height: 200px;
}
.one-chat {
  padding: 5px;
  color: #fff;
  background-color: rgb(1 28 38);
  margin: 5px;
  width: fit-content;
  border-radius: 5px;
}
.one-chat:hover > .remove {
  display: inline;
}

.container {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 500px;
  background-color: rgb(2, 46, 62);
}
.last-item {
  display: flex;
  justify-content: space-between;
}
.input {
  flex-grow: 1;
  border-radius: 0 0 0 10px;
}
.send-img {
  width: 30px;
  padding: 0;
}
.button {
  background-color: #fff;
  border-radius: 0 0 10px 0;
}
.remove {
  background-color: rgb(1 28 38);
  color: #f4d0d0;
  display: none;
}
</style>
