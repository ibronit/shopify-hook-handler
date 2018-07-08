const models = require('../../models/');

const domainHeader = 'X-Shopify-Shop-Domain';

module.exports = function (req, res, next) {
    const domain = req.get(domainHeader);
    models.Shop.findOne({where: {domain: domain}})
        .then(Shop => {
            if (Shop === null) {
                return res.status(404).json({status: 404, message: `Shop cannot find with domain ${domain}`});
            }
            next();
        });
}