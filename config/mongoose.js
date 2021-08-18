// 載入mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })

//回報連線狀況
const dataBase = mongoose.connection

dataBase.on('error', () => {
  console.log('！！MongoDB errorError！！')
})

dataBase.once('open', () => {
  console.log('MongoDB Connected  ｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡ ')
})

module.exports = dataBase