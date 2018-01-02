const RouteController = require(__basename + '/routesController/routesController.js');

exports.routes = function (app) {

	app.get('/message', RouteController.sendMessageController);

}