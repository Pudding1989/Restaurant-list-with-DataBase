const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

router.get('/', (req, res) => {
  const order = req.query.order
  let asc = ''
  let desc = ''

  switch (order) {
    case '': asc = true
      break
    case '-': desc = true
      break
    default: asc = true
      break
  }

  let sort = req.query.sort
  let name = ''
  let category = ''
  let location = ''
  let rating = ''
  let uid = ''

  switch (sort) {
    case 'name': name = true
      break
    case 'category': category = true
      break
    case 'location': location = true
      break
    case 'rating': rating = true
      break
    case '_id': uid = true
      break
    default: uid = true
      break
  }

  sort = order + sort

  return Restaurant
    .find()
    .lean()
    .sort(sort)
    .then(restaurantData => res.render('index', { restaurantData, asc, desc, name, category, location, rating, uid }))
    .catch(error => console.log(error))
})

module.exports = router

// 首頁排序 Dropdown
// const option = req.params.option
// let sortBy = ''
// switch (option) {
//   case '_id': sortBy = '新增時間'
//     break
//   case 'name': sortBy = '餐廳名稱'
//     break
//   case 'category': sortBy = '餐廳類型'
//     break
//   case 'location': sortBy = '所在地區'
//     break
//   case 'rating': sortBy = '餐廳評價'
//     break
//   default: sortBy = ''
//     break
// }
