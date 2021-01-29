var express = require('express')
var router = express.Router()

router.get('/', (req, res)=>{
    //res.json({route:'home'})
    res.render('home')
})



module.exports = router