const express = require('express')
const app = express()
const port = 3000

//載入模板引擎
const exphbs = require('express-handlebars')
app.set('view engine', 'hbs')
// 設定預設layout，設定副檔名為「hbs」
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))

//載入靜態檔案
app.use(express.static('public'))

// 載入mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })
//回報連線狀況
dataBase = mongoose.connection
dataBase.on('error', () => {
  console.log('！！MongoDB errorError！！')
})
dataBase.once('open', () => {
  console.log('MongoDB Connected  ｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡ ')
})

//body-parser
app.use(express.urlencoded({ extended: true }))

//載入model
const Restaurant = require('./models/restaurant')

//首頁路由
app.get('/', (req, res) => {
  return Restaurant.find()
    .lean()
    .then(restaurantData => res.render('index', { alt: '我的餐廳清單', restaurantData }))
    .catch(error => console.error(error))
})

//個別資料路由
app.get('/restaurants/:id/show', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then(restaurantData => res.render('show', { alt: '好。吃', object: restaurantData }))
    .catch(error => console.error(error))
})

//Create 功能
app.get('/restaurants/new', (req, res) => {
  return Restaurant.find()
    .lean()
    .then(restaurantData => res.render('new', { alt: '我的餐廳清單', restaurantData }))
    .catch(error => console.error(error))
})

app.post('/restaurants', (req, res) => {
  //接收request body
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
    .then(() => res.redirect(`/`))
    .catch(error => console.log(error))
})

//監聽伺服器
app.listen(port, () => {
  console.log(`NOW, Express is start listening on http://localhost:${port}`)
})