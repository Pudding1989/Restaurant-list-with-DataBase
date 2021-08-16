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

//載入model
const Restaurant = require('./models/restaurant')

//首頁路由
app.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then(restaurantData => res.render('index', { alt: '我的餐廳清單', restaurantData }))
    .catch(error => console.error(error))
})

//個別資料路由
app.get('/restaurants/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then(restaurantData => res.render('show', { alt: '好。吃', object: restaurantData }))
    .catch(error => console.error(error))
})


  //搜尋結果路由
  // app.get('/search', (req, res) => {
  //   const keyword = req.query.keyword.trim()
  //   let invalidClass = ''
  //   if (!keyword.length) invalidClass = "is-invalid"
  //   //先搜尋店名再搜尋種類
  //   const result = restaurantData.results.filter(object => {
  //     return object.name.toLowerCase().includes(keyword.toLowerCase()) || object.category.includes(keyword)
  //   })
  //   res.render('index', { alt: '我的餐廳清單', keyword, invalidClass, data: result })
  // })

  //監聽伺服器
  app.listen(port, () => {
    console.log(`NOW, Express is start listening on http://localhost:${port}`)
  })