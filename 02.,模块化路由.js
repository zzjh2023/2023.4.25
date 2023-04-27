// 创建web服务器
const express = require('express')
const app = express()

// 1.导入路由模块
const router = require('./03.router')
// 2.使用app.use()注册路由模块
// 注意：app.use()函数的作用，就是来注册全局中间件
app.use('/api', router)

app.listen(80, function(){
    console.log('http://127.0.0.1');
})