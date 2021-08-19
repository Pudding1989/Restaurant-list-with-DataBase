// CRUD功能，轉到這邊
const express = require('express')
const router = express.Router()

// 載入模型
const Restaurant = require('../../models/restaurant')

// * Create 功能
// NOTE: 一定要在 GET /restaurant/:id
// 不然會被：id攔截
router.get('/new', (req, res) => {
  return Restaurant.find()
    .lean()
    .then(restaurantData => res.render('new', { alt: '我的餐廳清單', restaurantData }))
    .catch(error => console.error(error))
})

router.post('/', (req, res) => {
  // 接收request body
  const name = req.body.name
  const name_en = req.body.name_en
  const category = req.body.category
  const image = req.body.image
  const location = req.body.location
  const phone = req.body.phone
  const google_map = req.body.google_map
  const rating = req.body.rating
  const description = req.body.description

  return Restaurant
    .create({ name, name_en, category, image, location, phone, google_map, rating, description })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// 個別資料路由
router.get('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then(restaurantData => res.render('show', { alt: '好。吃', object: restaurantData }))
    .catch(error => console.error(error))
})

// Update功能
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Restaurant
    .findById(id)
    .lean()
    .then(restaurantData => res.render('edit', { restaurantData }))
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
  const id = req.params.id

  const name = req.body.name
  const name_en = req.body.name_en
  const category = req.body.category
  const image = req.body.image
  const location = req.body.location
  const phone = req.body.phone
  const google_map = req.body.google_map
  const rating = req.body.rating
  const description = req.body.description

  return Restaurant
    .findById(id)
    .then(restaurantData => {
      restaurantData.name = name
      restaurantData.name_en = name_en
      restaurantData.category = category
      restaurantData.image = image
      restaurantData.location = location
      restaurantData.phone = phone
      restaurantData.google_map = google_map
      restaurantData.rating = rating
      restaurantData.description = description
      return restaurantData.save()
    })
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
})

// Delete功能
router.delete('/:id/', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .then(restaurantData => restaurantData.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// !NOTE: 記得匯出模組
module.exports = router
