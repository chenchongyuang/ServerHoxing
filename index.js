global.__basename = __dirname;

global.config = require(__basename + '/config/config.js');

const express = require('express');

const bodyParser = require('body-parser');

const Routes = require(__basename + '/routes/routes.js');

//express实例化
const app = express();



//设置跨域权限
app.all('*', (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'X-Requested-With');
	res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
	res.header('X-Powered-By', '3.2.1');
	next();
});

//解析post请求体，将请求体格式化成一个对象
app.use(bodyParser.json());

global.urlencoded = bodyParser.urlencoded({ extended: false })
//设置静态目录
//中间件
app.use(express.static(__basename + '/public'));

//加载所有路由信息
Routes.routes(app);

//404
app.use((req,res) => {
	res.status(404);
	res.send('找不到页面');
})

//500
app.use((err,req,res) => {
	res.status(500);
	res.send('服务器发生错误');
})

app.listen(config.server.port);