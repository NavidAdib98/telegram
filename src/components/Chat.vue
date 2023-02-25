<template>
  <br />
  <div class="container">
    <div class="chat-box">
      <div class="one-chat" v-for="item in messages" :key="item.id">
        <img
          v-if="item.position === 'l'"
          src="./../../public/images/profile_image_list.jpeg"
          v-bind:alt="'pic'"
        />
        <img
          v-else
          src="./../../public/images/profile_image.webp"
          v-bind:alt="'pic'"
        />
        {{ item.text }}
        <button class="remove" @click="removeText(item.id)">x</button>
      </div>
      <br />
    </div>
    <div class="last-item">
      <p style="color: red" v-if="maxType()">too long</p>
      <p v-else-if="typing()">typing...</p>

      <input
        ref="input"
        class="input"
        type="text"
        placeholder="Message"
        :value="msg"
        @input="inputHandler"
      />
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
      tooLong: 30,
    };
  },
  props: {
    user: Object,
  },
  methods: {
    inputHandler($event) {
      const text = $event.target.value;
      if (text.length < this.tooLong + 1) {
        this.msg = text;
      }
      this.$forceUpdate();
    },
    addData() {
      if (this.msg) {
        this.messages.push({
          id: this.id++,
          text: this.msg,
          position: "r",
        });
        this.msg = "";
      }
      this.$refs.input.focus();
    },
    typing() {
      if (this.msg) {
        return true;
      } else {
        return false;
      }
    },
    maxType() {
      if (this.msg.length > this.tooLong - 1) {
        return true;
      } else {
        return false;
      }
    },
    removeText(id) {
      this.messages = this.messages.filter((item) => item.id !== id);
    },
    imageMaker(position) {
      if (position === "l")
        return "./../../public/images/profile_image_list.jpeg";
      else return "./../../public/images/profile_image.webp";
    },
  },
  mounted() {
    this.$refs.input.focus();
    this.messages.push({
      id: this.id++,
      text: "Hello Dear",
      position: "l",
    });
    this.messages.push({
      id: this.id++,
      text: `My name is Dr. ${this.user.name}`,
      position: "l",
    });
    this.messages.push({
      id: this.id++,
      text: `I'm from ${this.user.address.city}`,
      position: "l",
    });
    this.messages.push({
      id: this.id++,
      text: "how can I help you ???",
      position: "l",
    });
  },
};
</script>

<style scoped>
.chat-box {
  overflow-y: scroll;
  height: 80dvh;
}

.one-chat {
  padding: 5px;
  color: #fff;
  background-color: rgb(1 28 38);
  margin: 5px;
  width: fit-content;
  max-width: 500px;
  border-radius: 5px;
}

.one-chat:hover > .remove {
  display: inline;
}

.one-chat img {
  max-width: 20px;
  border-radius: 50%;
}

.container {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 500px;
  background-color: rgb(60, 93, 96);
}

.last-item {
  position: relative;
  display: flex;
  justify-content: space-between;
}

.last-item p {
  position: absolute;
  bottom: 30px;
  left: 10px;
  color: #fff;
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
  color: #edb0b0;
  display: none;
}
</style>
