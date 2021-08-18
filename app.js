const port = 3000
const express = require('express')
//載入模板引擎
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')

//載入路由器們
const routes = require('./routes')
// 載入mongoose
require('./config/mongoose')


const app = express()

// 設定預設layout，設定副檔名為「hbs」
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

//載入靜態檔案
app.use(express.static('public'))
//body-parser
app.use(express.urlencoded({ extended: true }))
//新增 PUT、DELETE方法
app.use(methodOverride('_method'))
//最後轉給路由模組
app.use(routes)


//監聽伺服器
app.listen(port, () => {
  console.log(`NOW, Express is start listening on http://localhost:${port}`)
})