const express = require('express');
const PORT = 8888;
const socket = require('socket.io');
const Router = require("./Core/route/WsRouter");
const Peertalk = require('peertalk');
const TestController = require('./Core/route/controllers/TestController');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello world !");
});

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const WebsocketServer = socket(server);

const WsRouter = new Router({
    webSocketInstance: WebsocketServer
});


WsRouter
.on('test', TestController)
.init();