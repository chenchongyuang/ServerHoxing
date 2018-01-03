const RouteController = require(__basename + '/routesController/routesController.js');

exports.routes = function (app) {

	app.get('/message', RouteController.sendMessageController);

    app.get('/register', RouteController.registerController);
    
    app.get('/login',RouteController.loginController);

    app.get('/home',RouteController.homeController);
}