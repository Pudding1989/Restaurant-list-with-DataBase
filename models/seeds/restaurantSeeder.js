const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })

const Restaurant = require('../restaurant')
const restaurantData = require('../../restaurant.json').results

const database = mongoose.connection
database.on('error', () => console.log('！！MongoDB Error！！'))

database.once('open', () => {
  console.log('Seeder connect to MongoDB ｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡ ')
  //用Json資料套用
  restaurantData.forEach(object => {
    Restaurant.create({
      name: object.name,
      name_en: object.name_en,
      category: object.category,
      image: object.image,
      location: object.location,
      phone: object.phone,
      google_map: object.google_map,
      rating: object.rating,
      description: object.description,
    })
  })
  console.log('播種完畢 <(￣︶￣)>')
})
