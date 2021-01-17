
export const ServerService = {
    socket: new WebSocket('ws://localhost:3080'),
    state: 'disconnect',
    createConnection: function (){
        this.socket.onopen = function (){
            this.state = 'connected';
            console.log(this.state);
        }
    },
    sendMessage: function (){
        this.socket.send(JSON.stringify({event: 'messageToServer'}));
    }
}