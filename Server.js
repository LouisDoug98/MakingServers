var express = require('express')
var app = express()
var port = 3000 
var backupPort = 5000
var server = app.listen(port||backupPort, startServer)
app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))

app.use(handler)
app.use('/', require('./Routes/home'))

function handler(req, res, next){
    app.use(req.originalUrl,require('./Routes/about'))
    next()
}

function startServer(err, res){
    if (err) throw err
    else{
        console.log("listening on port "+server.address().port)
    }
}



