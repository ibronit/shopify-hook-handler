const cartHelper = require('../../models/helpers/cartHelper');

const topicHeader = 'x-shopify-topic';

const cartCreateTopic = 'carts/create';
const cartUpdateTopic = 'carts/update';

exports.handleCartRequest = function (req, res) {
    const topic = req.get(topicHeader);
    switch (topic) {
        case cartCreateTopic:
            return createCart(req, res);
        case cartUpdateTopic:
            return updateCart(req, res);
    }
    return res.status(404).json({ status: 404, message: `Can't handle topic ${topic}` });
}

function createCart(req, res) {
    cartHelper.createByRequestBody(req.body)
        .then(() => {
            return res.json({ status: 200, message: 'Cart has been created' });
        })
        .catch((err) => {            
            return res.status(500).json({ status: 500, message: 'Internal server error' });
        });
}

function updateCart(req, res) {
    cartHelper.updateByRequestBody(req.body)
        .then(() => {
            return res.json({ status: 200, message: 'Cart has been updated' });
        })
        .catch(() => {
            return res.status(500).json({ status: 500, message: 'Internal server error' });
        });

}