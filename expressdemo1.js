const express = require('express')

const app = express()

var port = process.env.PORT || 9090

app.post('/ibm',function(req,res){
    res.send('<h2>Welcome To Express Server Using post</h2>')
})

app.get('/ibm',function(req,res){
    res.send('<h2>Welcome To Express Server Using get</h2>')
})

app.put('/ibm',function(req,res){
    res.send('<h2>Welcome To Express Server Using put</h2>')
})

app.delete('/ibm',function(req,res){
    res.send('<h2>Welcome To Express Server Using delete</h2>')
})

app.listen(port,function(){
   console.log('express server started')
})

