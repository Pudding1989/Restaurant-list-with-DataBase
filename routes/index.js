const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const curd = require('./modules/restaurants')
const search = require('./modules/search')

router.use('/', home)
//CRUD轉到這邊
router.use('/restaurants', curd)
router.use('/search', search)


module.exports = router