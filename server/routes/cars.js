var express = require('express');
const { getActive, updateActive } = require('../controller/carController');
var router = express.Router();

/* GET users listing. */
router.get('/', getActive);
router.put('/update', updateActive);

module.exports = router;
