const express = require('express')
const {getCity} = require('./city.controller')
const router = express.Router()

router.get('/:name', getCity)
module.exports = router



