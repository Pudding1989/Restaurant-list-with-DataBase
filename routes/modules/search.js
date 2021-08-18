const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

router.get('/', (req, res) => {
  const keyword = req.query.keyword.trim()
  let invalidClass = ''
  if (!keyword.length) invalidClass = 'is-invalid'

  const keywordRegex = new RegExp(keyword, 'i')
  Restaurant.
    find({ $or: [{ name: { $regex: keywordRegex } }, { category: { $regex: keywordRegex } }] })
    .lean()
    .then(restaurantData => {
      res.render('index', { invalidClass, keyword, restaurantData })
    })
})

module.exports = router