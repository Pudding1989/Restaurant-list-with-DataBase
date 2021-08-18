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

const methodOverride = require('method-override')

//載入路由器們
const routes = require('./routes')

//body-parser
app.use(express.urlencoded({ extended: true }))

//新增 PUT、DELETE方法
app.use(methodOverride('_method'))

app.use(routes)


//監聽伺服器
app.listen(port, () => {
  console.log(`NOW, Express is start listening on http://localhost:${port}`)
})