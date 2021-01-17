<template>
  <div id="HomePage" class="content">
    <button v-on:click="sendMessage">Send message</button>
    <h1>{{ code }}</h1>
  </div>
</template>

<script>

export const socket = new WebSocket('ws://localhost:3080');

export default {
  name: 'HomePage',
  props: {
    socket: socket
  },
  data() {
    return {
      code: ' ',
    }
  },
  methods: {
    sendMessage: function (){
      socket.send(JSON.stringify({
        event: 'messageToServer'
      }));
      socket.onmessage = (code) => this.receiveMessage(code)
    },
    receiveMessage: function (code){
      console.log(code.data);
      this.code = code.data;
    },
  },
  created(){
    socket.onopen = function (){
      console.log('conected');
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  padding-top: 5%;
}

button{
  width: 200px;
  height: 100px;
  font-size: 120%;
  border-radius: 12px;
  margin-bottom: 5%;
  background-color: #2c3e50;
  font-weight: bold;
  color: white;
}

h1{
  transition: 0.5s ease-in-out;
}
</style>
