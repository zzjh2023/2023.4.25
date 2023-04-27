const express = require('express')
const app = express()

// 定义一个最简单的中间件函数
// const mw = function(req, res, next){
    // console.log('最简单的中间件函数');
    // 把流转关系，转交给下一个中间件或路由
    // next()
// }

// 将mw注册为全局生效的中间件
// app.use(mw)

// 这是定义全局中间件的简化形式
app.use(function(req, res, next){
// 获取到请求到达服务器的时间
const time = Data.now()
// 为 req 对象，挂载自定义属性，从而把时间共享给后面的所有路由
req.startTime = time
next()
})

// 定义路由
app.get('/', function(req,res){
    res.send('home page' + req.startTime)
})
app.post('/', function(req, res){
    res.send('user page' + req.startTime)
})


app.listen(80, function(){
    console.log('http://127.0.0.1');
})