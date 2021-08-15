const express = require('express')
const app = express()
const port = 3000

//載入模板引擎
const exphbs = require('express-handlebars')
app.set('view engine', 'handlebars')
// 設定layout
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))

//載入靜態檔案
app.use(express.static('public'))

//載入清單餐廳JSON資料
const restaurantData = require('./restaurant.json')

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

//預設路由
app.get('/', (req, res) => {
  res.render('index', { alt: '我的餐廳清單', data: restaurantData.results })
})

//個別內頁路由
app.get('/restaurants/:id', (req, res) => {
  const userSelect = restaurantData.results.find(object => object.id.toString()
    === req.params.id)
  res.render('show', { alt: '好。吃', object: userSelect })
})

//搜尋結果路由
app.get('/search', (req, res) => {
  const keyword = req.query.keyword.trim()
  let invalidClass = ''
  if (!keyword.length) invalidClass = "is-invalid"
  //先搜尋店名再搜尋種類
  const result = restaurantData.results.filter(object => {
    return object.name.toLowerCase().includes(keyword.toLowerCase()) || object.category.includes(keyword)
  })
  res.render('index', { alt: '我的餐廳清單', keyword, invalidClass, data: result})
})

//監聽伺服器
app.listen(port, () => {
  console.log(`NOW, Express is start listening on http://localhost:${port}`)
})