const RouteController = require(__basename + '/routesController/routesController.js');

exports.routes = function (app) {

	app.post('/message', RouteController.sendMessageController);

    app.post('/register', RouteController.registerController);
    
    app.post('/login',RouteController.loginController);

    app.get('/home',RouteController.homeController);

    app.get('/product_data',RouteController.product_dataController);

    app.get('/product',RouteController.productController);

    app.get('/order',RouteController.orderController);

    app.post('/forget_pwd',RouteController.forget_pwdController);   

    app.get('/shopping',RouteController.shoppingController); 
}