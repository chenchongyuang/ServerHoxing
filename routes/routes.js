const RouteController = require(__basename + '/routesController/routesController.js');

exports.routes = function (app) {

	app.get('/', RouteController.homeController);

	app.post('/', RouteController.homeController);

	app.get('/about', RouteController.homeController);

}