const cartController = require('../controller/cartController');
const shopValidator = require('../middleware/shopValidator');

module.exports = function (app) {
    app.use('/cart', shopValidator);
    app.route('/cart')
        .post(cartController.handleCartRequest);
}