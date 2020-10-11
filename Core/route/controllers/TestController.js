const BaseController = require('./BaseController');

class TestController extends BaseController {
    fire(wsEvent) {
        console.log('Test succeed ! New event received -> ', wsEvent);
    }
}

module.exports = TestController;