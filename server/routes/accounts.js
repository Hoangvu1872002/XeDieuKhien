var express = require('express');
const { login } = require('../controller/accountController');
var router = express.Router();

/* GET users listing. */
router.get('/login', login);

module.exports = router;
