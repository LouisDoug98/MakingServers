var express = require('express')
var router = express.Router()

router.get('/',(req, res)=>{
    console.log(77)
    res.render('about')
})


module.exports = router

