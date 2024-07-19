const express = require('express')
require('dotenv').config()
const app = express()
const funcs = require('./funcs')
app.use(express.urlencoded({extended:false}))
app.use(express.json())
const connectDB = require('./connect')
app.use('/pibrowser/', funcs)
app.use(express.static('public'))


const start = async ()=>{
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(3000, ()=>{console.log('PORT: 3000')})
  } catch (error) {
    console.log(error)
  }
}

start()