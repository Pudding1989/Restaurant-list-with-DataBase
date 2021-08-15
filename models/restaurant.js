const mongoose = require('mongoose')

// NOTE: 建立Schema，來產生模型
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
  name: {
    type: 'string',
    required: true
  },

  name_en: {
    type: 'string'
  },

  category: {
    type: 'string',
    required: true
  },

  image: {
    type: 'string',
    required: true
  },

  location: {
    type: 'string',
    required: true
  },

  phone: {
    type: 'string',
    required: true
  },

  google_map: {
    type: 'string',
  },

  rating: {
    type: 'Number',
    min: 0,
    max: 5,
    required: true,
  },

  description: {
    type: 'string',
  },
})
//輸出為大寫表示為建構式
module.exports = mongoose.model('Restaurant', restaurantSchema)