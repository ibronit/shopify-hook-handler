exports.handleCartRequest = function (req, res) {
    const body = req.body;
    console.log(req);
}

function createCart (req, res) {
    console.log('create api called');
    return res.json({status: 200, message: 'OK'});
}

function updateCart (req, res) {
    console.log('update api called');
    return res.json({status: 200, message: 'OK'});
}