'use strict';

var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {
        title: 'Express'
    });
});

fs.readdirSync(__dirname)

    .filter(function (file) {

        return file.indexOf('.') !== 0 && file !== 'index.js';
    })

    .forEach(function (file) {

        router.use('/' + path.basename(file, '.js'), require(path.join(__dirname, file)));
        console.log('/' + path.basename(file, '.js'), path.join(__dirname, file));
    });



module.exports = router;
