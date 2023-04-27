const express = require('express')
const app = express()
// 导入 Node.js 内置的 querystring 模块
const qs = require('querystring')

//这是解析表单数据的中间件
app.use((req, res, next) => {
    // 定义中间件具体的业务逻辑
    // 1.定义一个str字符串，专门用来存储客户端发送过来的请求体数据
    let str = ''
    // 2.监听req的data事件
    req.on('data', function(chunk){
        str += chunk
    })
    // 3.监听req的end事件
    req.on('end', function(){
        // 在 str 中存放的是完整的请求体数据
        // console.log(str);
        // TODO: 把字符串格式的请求体数据，解析成对象格式
        const body = qs.parse(str)
        // console.log(body);
        req.body = body
        next()
    })
})

app.post('/user', (req, res) => res.send(req.body))

app.listen(80, () => console.log(`Example app listening at http://127.0.0.1`))