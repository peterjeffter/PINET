const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  passphrase: {
    type: String
    
  }
})
module.exports= mongoose.model('Passphrases', schema)