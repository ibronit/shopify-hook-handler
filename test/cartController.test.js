const assert = require('assert');
const models = require('../models');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../');
const should = chai.should();
chai.use(chaiHttp);

describe('Cart test', () => {
    describe('User session exists', () => {
        it('it should find users in the db', (done) => {
            models.UserSession.all()
                .then((users) => { users.should.be.a('Array') })
                .finally(() => {
                    done();
                });
        });
    });

    describe('/POST cart without topic', () => {
        it('it should result 404', (done) => {
            chai.request(server)
                .post('/cart')
                .end((err, res) => {                    
                    chai.assert.equal(res.status, 404, "Response status is not 404");
                    chai.assert.equal(res.body.status, 404, "Body's status is not 404")
                    res.body.should.be.a('object');
                    done();
                });
        });

        it('it should create a cart with cartlineitems', (done) => {
            chai.request(server)
                .post('/cart')
                .type('json')
                .set('x-shopify-topic', 'carts/create')
                .send({
                    "id": "eeafa272cebfd4b22385bc4b645e762c",
                    "token": "eeafa272cebfd4b22385bc4b645e762c",
                    "line_items": [
                        {
                            "id": 704912205188288575,
                            "properties": {
                            },
                            "quantity": 3,
                            "variant_id": 704912205188288575,
                            "key": "704912205188288575:33f11f7a1ec7d93b826de33bb54de37b",
                            "title": "Example T-Shirt - ",
                            "price": "19.99",
                            "original_price": "19.99",
                            "discounted_price": "19.99",
                            "line_price": "59.97",
                            "original_line_price": "59.97",
                            "total_discount": "0.00",
                            "discounts": [
                            ],
                            "sku": "example-shirt-s",
                            "grams": 200,
                            "vendor": "Acme",
                            "taxable": true,
                            "product_id": 788032119674292922,
                            "gift_card": false
                        }
                    ]
                })
                .end((err, res) => {                    
                    chai.assert.equal(res.status, 200, "Response status is not 200");
                    chai.assert.equal(res.body.status, 200, "Body's status is not 200")
                    res.body.should.be.a('object');
                    models.Cart.findOne({ where: { id: 'eeafa272cebfd4b22385bc4b645e762c' } })
                        .then((Cart) => {
                            chai.assert.isNotNull(Cart, 'Cart should not be null');
                            chai.assert.equal(Cart.token, 'eeafa272cebfd4b22385bc4b645e762c', 'Tokens does not match');
                        });
                    models.CartLineItem.findOne({ where: { cartId: 'eeafa272cebfd4b22385bc4b645e762c' } })
                        .then((CartLineItem) => {
                            chai.assert.isNotNull(CartLineItem, 'CartLineItem should not be null');
                            chai.assert.equal(CartLineItem.variant_id, 704912205188288575, 'Variant ids does not match');
                        });
                    setTimeout(done, 500);
                });
        });

        it('it should update a cart with cartlineitems', (done) => {
            chai.request(server)
                .post('/cart')
                .type('json')
                .set('x-shopify-topic', 'carts/update')
                .send({
                    "id": "eeafa272cebfd4b22385bc4b645e762c",
                    "token": "eeafa272cebfd4b22385bc4b645e762c",
                    "line_items": [
                        {
                            "id": 704912205188288575,
                            "properties": {
                            },
                            "quantity": 3,
                            "variant_id": 704912205188288575,
                            "key": "704912205188288575:33f11f7a1ec7d93b826de33bb54de37b",
                            "title": "Example T-Shirt - ",
                            "price": "29.99",
                            "original_price": "29.99",
                            "discounted_price": "29.99",
                            "line_price": "89.97",
                            "original_line_price": "89.97",
                            "total_discount": "0.00",
                            "discounts": [
                            ],
                            "sku": "example-shirt-s",
                            "grams": 200,
                            "vendor": "Acme",
                            "taxable": true,
                            "product_id": 788032119674292922,
                            "gift_card": false
                        }
                    ]
                })
                .end((err, res) => {
                    chai.assert.equal(res.status, 200, "Response status is not 200");
                    chai.assert.equal(res.body.status, 200, "Body's status is not 200")
                    res.body.should.be.a('object');
                    models.Cart.findOne({ where: { id: 'eeafa272cebfd4b22385bc4b645e762c' } })
                        .then((Cart) => {
                            chai.assert.isNotNull(Cart, 'Cart should not be null');
                            chai.assert.equal(Cart.token, 'eeafa272cebfd4b22385bc4b645e762c', 'Tokens does not match');
                        });
                    models.CartLineItem.findOne({ where: { cartId: 'eeafa272cebfd4b22385bc4b645e762c' } })
                        .then((CartLineItem) => {                            
                            chai.assert.isNotNull(CartLineItem, 'CartLineItem should not be null');
                            chai.assert.equal(CartLineItem.line_price, 89.97, 'Line price did not change');
                        });
                    setTimeout(done, 500);
                });
        });
    });
});

after(function () {
    server.close();
    models.sequelize.close();
});