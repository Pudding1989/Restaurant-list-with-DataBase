const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const curd = require('./modules/restaurants')
const search = require('./modules/search')
const sort = require('./modules/sort')

router.use('/', home)
// CRUD轉到這邊
router.use('/restaurants', curd)
// 首頁功能性路由
router.use('/search', search)
router.use('/sort', sort)

module.exports = router
