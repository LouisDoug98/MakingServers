var express = require('express')
var router = express.Router()

router.get('/',(req, res)=>{
    res.json({route:'about'})
})


module.exports = router

