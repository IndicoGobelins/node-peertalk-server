class BaseController {
    constructor(options) {
        this.initElements(options);
    }

    initElements(options) {
        const { socket, ioInstance, iosCommander } = options;
        this.socket = socket;
        this.ioInstance = ioInstance;
        this.iosCommander = iosCommander
    }

    fire(wsEvent) {

    }
}

module.exports = BaseController;