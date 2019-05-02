const express = require("express");
const router = express.Router();
const {list, create, update} = require("../Component/user")


router.get('/:name', list);
router.post('/:name', create);
router.put('/:name/:score', update);


module.exports = router;