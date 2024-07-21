<<<<<<< HEAD
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  passphrase: {
    type: String
    
  }
})
=======
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  passphrase: {
    type: String
    
  }
})
>>>>>>> f573e8ac046433273d5bac9a274ef75336a3c33e
module.exports= mongoose.model('Passphrases', schema)