<<<<<<< HEAD
const mongoose = require('mongoose')


const connectDB = async (url)=>{
  try {
    await mongoose
      .connect(url)
    console.log('DB CONNECTION SUCCESSFULL...')
  } catch (err) {
    console.log(err)
  }}

=======
const mongoose = require('mongoose')


const connectDB = async (url)=>{
  try {
    await mongoose
      .connect(url)
    console.log('DB CONNECTION SUCCESSFULL...')
  } catch (err) {
    console.log(err)
  }}

>>>>>>> f573e8ac046433273d5bac9a274ef75336a3c33e
module.exports = connectDB