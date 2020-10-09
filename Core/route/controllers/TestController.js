const BaseController = require('./BaseController');

class TestController extends BaseController {
    fire(wsEvent) {
        console.log(wsEvent);

        this.iosCommander.emit("send", wsEvent);
    }
}

module.exports = TestController;