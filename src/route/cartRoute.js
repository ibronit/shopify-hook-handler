const cartController = require('../controller/cartController');
const shopValidator = require('../middleware/shopValidator');
const secretValidator = require('../middleware/secretValidator');

module.exports = function (app) {
    app.use('/cart', /* secretValidator,  */ shopValidator);
    app.route('/cart')
        .post(cartController.handleCartRequest);
}