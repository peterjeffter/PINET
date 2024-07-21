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

module.exports = router