const express = require('express')
const app = express()

// 挂载路由
app.get('/', function(req, res){
    res.send('hello')
})

app.post('/', function(req, res){
    res.send('post')
})

app.listen(80, function(){
    console.log('http://127.0.0.1');
})