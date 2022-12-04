var express = require('express');
var route = express.Router();

route.get('/abc', function(req, res){
    res.send('Hello ABC');
});

module.exports = route;