// 由mongoose統一連接資料庫
const dataBase = require('../../config/mongoose')

// 載入模型、資料來源
const Restaurant = require('../restaurant')
const restaurantData = require('../../restaurant.json').results

dataBase.once('open', () => {
  console.log('Seeder connect to MongoDB ｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡ ')
  // 用Json資料套用
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
      description: object.description
    })
  })

  console.log('播種完畢 <(￣︶￣)>')
})
