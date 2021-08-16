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

//Update功能
app.get('/restaurants/:id/edit', (req, res) => {
  const id = req.params.id
  return Restaurant
    .findById(id)
    .lean()
    .then(restaurantData => res.render('edit', { restaurantData }))
    .catch(error => console.log(error))
})

app.post('/restaurants/:id/edit', (req, res) => {
  const id = req.params.id

  const name = req.body.name
  const name_en = req.body.name_en
  const category = req.body.category
  const image = req.body.image
  const location = req.body.location
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
      restaurantData.google_map = google_map
      restaurantData.rating = rating
      restaurantData.description = description
      return restaurantData.save()
    })
    .then(() => res.redirect(`/restaurants/${id}/show`))
    .catch(error => console.log(error))
})

//Delete功能
app.get('/restaurants/:id/delete', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .then(restaurantData => restaurantData.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})


//Search 功能
app.get('/search', (req, res) => {
  const keyword = req.query.keyword.trim()
  let invalidClass = ''
  if (!keyword.length) invalidClass ='is-invalid'

  const keywordRegex = new RegExp(keyword, 'i')
  Restaurant.find({ $or: [{ name: { $regex: keywordRegex } }, { category: { $regex: keywordRegex } }] })
    .lean()
    .then(restaurantData => {
      res.render('index', { invalidClass, keyword, restaurantData })
    })
})

//監聽伺服器
app.listen(port, () => {
  console.log(`NOW, Express is start listening on http://localhost:${port}`)
})