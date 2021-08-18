//首頁路由
const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

router.get('/', (req, res) => {
  return Restaurant.find()
    .lean()
    .then(restaurantData => res.render('index', { alt: '我的餐廳清單', restaurantData }))
    .catch(error => console.error(error))
})

module.exports = router