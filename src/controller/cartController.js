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
    return res.json({ status: 404, message: `Can't handle topic ${topic}` });
}

function createCart(req, res) {
    console.log('create api called');
    return res.json({ status: 200, message: 'Cart has been created' });
}

function updateCart(req, res) {
    console.log('update api called');
    return res.json({ status: 200, message: 'Cart has been updated' });
}