const crypto = require('crypto');
const getRawBody = require('raw-body');
const config = require('dotenv-extended').load();

const secretHeader = 'X-Shopify-Hmac-Sha256';

// TODO: Not working wait for implementation
module.exports = function (req, res, next) {
    const { body: data } = req;
    const hmac = req.get('X-Shopify-Hmac-Sha256');

    try {
        const rawBody = getRawBody(req, function () {
            const generated_hash = crypto
                .createHmac('sha256', config.SHOPIFY_SECRET)
                .update(rawBody)
                .digest('base64');

            if (generated_hash !== hmac) {
                response.status(401).send();
                onVerified(new Error("Unable to verify request HMAC"));
                return;
            }
        });
        next();
    } catch (error) {
        response.status(401).send();
        onVerified(new Error("Unable to verify request HMAC"));
        return;
    }
}