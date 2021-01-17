
export const ServerService = {
    socket: new WebSocket('ws://localhost:3080'),
    message: '',
    createConnection(){
        this.socket.onopen = function (){
            console.log('conected');
        }
    },
    sendMessage: function (){
        this.socket.send(JSON.stringify({
            event: 'messageToServer'
        }));
        this.socket.onmessage = (message) => this.message = message.data;
    }
}