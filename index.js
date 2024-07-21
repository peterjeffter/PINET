<<<<<<< HEAD
const express = require('express')
require('dotenv').config()
const app = express()
const funcs = require('./funcs')
app.use(express.urlencoded({extended:false}))
app.use(express.json())
const connectDB = require('./connect')
app.use('/pibrowser/', funcs)
app.use(express.static('docs'))


const start = async ()=>{
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(3000, ()=>{console.log('PORT: 3000')})
  } catch (error) {
    console.log(error)
  }
}

=======
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

>>>>>>> f573e8ac046433273d5bac9a274ef75336a3c33e
start()