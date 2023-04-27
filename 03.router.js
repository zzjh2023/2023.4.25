// 这是路由模块
// 1.导入express
const express = require('express')
// 2.创建路由对象
const router = express.Router()
// 3.挂载获取用户列表的路由
router.get('/user/list', function(req, res){
    res.send('Get user list')
})
// 挂载添加用户的路由
router.post('/user/add', function(req, res){
    res.send('Add new user')
})
// 4.向外导出路由对象
module.exports = router