const Peertalk = require('peertalk');

class WsRouter {
    constructor(options) {
        this._initElements(options);
    }

    /**
     * Init all elements of the router
     */
    _initElements(options) {
        const { webSocketInstance } = options;
        this.events = [];
        this.io = webSocketInstance;
        this.testMode = false;
    }

    /**
     * Register new event handler
     */
    on(name, controller) {
        this.events.push({
            name,
            controller
        });

        return this;
    }

    /**
     * Init the router after register all events handlers
     */
    init() {
        this.io.on('connection', socket => {
            console.log('A new client is connected with this socket : ', socket.id);

            if (!this.testMode) {
                const peerTalkServer = new Peertalk();

                peerTalkServer.then(iosCommander => {
                    iosCommander.emit("send", "PeerTalk message here!");

                    iosCommander.on("data", data => {
                        const newData = data.replace(/[^\x20-\x7E]/g, '');
                        socket.emit(newData);
                    });

                    this.events.forEach((event, index) => {
                        const {name, controller} = event;
                        socket.on(name, socketEvent => {
                            new controller({socket, ioInstance: this.io, iosCommander}).fire(socketEvent);
                        });
                    });
                }).catch(error => {
                    console.log(error);
                })
            } else {
                socket.on('TEST', socketEvent => {
                    console.log(socketEvent);
                })
            }
        });
    }
}

module.exports = WsRouter;