var express = require('express');
const { updateParameter, getParameter, deleteParameter } = require('../controller/parameterController');
var router = express.Router();

/* GET users listing. */
router.put('/update', updateParameter);
router.get('/', getParameter);
router.delete('/', deleteParameter);

module.exports = router;
