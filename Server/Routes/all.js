const express = require("express");
const router = express.Router();
const {list, create, update} = require("../Component/user")


router.get('/names', list);
router.post('/name', create);
router.get('/score', update);


module.exports = router;