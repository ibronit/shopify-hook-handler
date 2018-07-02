const cartController = require('../controller/cartController');

module.exports = function (app) {
    app.route('/cart')
        .post(cartController.handleCartRequest)
}