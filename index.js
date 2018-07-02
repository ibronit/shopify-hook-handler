const express = require('express'),
    cartRoute = require('./src/route/cartRoute'),
    bodyParser = require('body-parser'),
    app = express(),
    port = process.env.PORT || 3000;

app.use(bodyParser.json());
cartRoute(app);

app.listen(port);
console.log('App is listening on PORT ' + port);