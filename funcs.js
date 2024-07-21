<<<<<<< HEAD
const express = require('express')
const passphrases = require('./schemas')

router = express.Router()

router.post('/',  async(req, res)=>{
  const phrase=  await passphrases.create(req.body)
  res.status(201).json({phrase})  
})
router.get('/',  async(req, res)=>{
  const phrase=  await passphrases.find({})
  res.status(201).json({phrase})
})

=======
const express = require('express')
const passphrases = require('./schemas')

router = express.Router()

router.post('/',  async(req, res)=>{
  const phrase=  await passphrases.create(req.body)
  res.status(201).json({phrase})  
})
router.get('/',  async(req, res)=>{
  const phrase=  await passphrases.find({})
  res.status(201).json({phrase})
})

>>>>>>> f573e8ac046433273d5bac9a274ef75336a3c33e
module.exports = router