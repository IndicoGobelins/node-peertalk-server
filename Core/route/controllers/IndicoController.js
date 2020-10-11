const BaseController = require('./BaseController');

class IndicoController extends BaseController {
    fire(wsEvent) {
        console.log('From IndicoController -> ', wsEvent);

        this.iosCommander.emit("send", wsEvent);
    }
}

module.exports = IndicoController;