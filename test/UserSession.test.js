const assert = require('assert');
const models = require('../models');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../');
const should = chai.should();

chai.use(chaiHttp);

describe('User session exists', function () {
    models.UserSession.all()
        .then((user) => { console.log(user); })
        .finally(() => {
            models.sequelize.close();
        });
});

describe('/POST cart', () => {
    it('it should create/edit the cart', (done) => {
        chai.request(server)
            .post('/cart')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                models.UserSession.all().then((user) => { console.log(user); }).then(() => { models.sequelize.close(); });
                done();
            });
    });
});

after(function () {
    server.close();
});