const models = require('../');

exports.createByRequestBody = function (requestBody) {
    return models.Cart.create({ id: requestBody.id, token: requestBody.token })
        .then((Cart) => {
            createCartLineItemsByRequest(requestBody, Cart);
        });
}

exports.updateByRequestBody = function (requestBody) {
    return models.Cart.findOne({ where: { id: requestBody.id } })
        .then((Cart) => {
            models.CartLineItem.destroy({ where: { cartId: Cart.id } })
                .then(() => {
                    createCartLineItemsByRequest(requestBody, Cart);
                })
        });
}

function createCartLineItemsByRequest(requestBody, Cart) {
    requestBody.line_items.forEach((item) => {
        models.CartLineItem.create({
            cartId: Cart.id,
            quantity: item.quantity,
            variant_id: item.variant_id,
            key: item.key,
            title: item.title,
            price: parseFloat(item.price),
            original_price: parseFloat(item.original_price),
            discounted_price: parseFloat(item.discounted_price),
            line_price: parseFloat(item.line_price),
            original_line_price: parseFloat(item.original_line_price),
            total_discount: parseFloat(item.total_discount),
            sku: item.sku,
            grams: item.grams,
            vendor: item.vendor,
            taxable: item.taxable,
            product_id: item.product_id,
            gift_card: item.gift_card,
        });
    });
}