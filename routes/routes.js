const RouteController = require(__basename + '/routesController/routesController.js');

exports.routes = function (app) {
    //短信获取
	app.post('/message', RouteController.sendMessageController);
    //注册验证
    app.post('/register', RouteController.registerController);
    //登陆验证
    app.post('/login',RouteController.loginController);
    //首页数据获取
    app.get('/home',RouteController.homeController);
    //产品详情页数据获取
    app.get('/product_data',RouteController.product_dataController);
    //产品页数据获取
    app.get('/product',RouteController.productController);
    //全部订单数据获取
    app.get('/order',RouteController.orderController);
    //手机修改密码验证
    app.post('/forget_pwd',RouteController.forget_pwdController); 
    //email修改密码验证
    app.post('/forget_pwd_email',RouteController.forget_pwd_emailController);
    //email修改密码验证码
    app.post('/message_email',RouteController.forget_pwd_email_codeController);
    //购物车数据获取
    app.get('/shopping',RouteController.shoppingController);
    //退货数据获取
    app.get('/returns',RouteController.returnsController); 
    //删除订单
    app.get('/Delete_order',RouteController.Deletete_orderController);
    //地址添加
    app.get('/address',RouteController.addressController);
    //地址管理
    app.get('/ship_ads',RouteController.ship_adsController);
    //加入购物车
    app.get('/join_shopping',RouteController.join_shoppingController);
    //修改个人资料
    app.get('/mine_data',RouteController.mine_dataController);
    //退出登录
    app.get('/drop_out',RouteController.drop_outController);
}