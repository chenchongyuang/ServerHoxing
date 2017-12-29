const API = require(__basename + '/service/api.js');

const SQL = require(__basename + '/lib/sql/sql.js');

class RouteController {
	constructor () {}

	homeController (req, res) {
		let sql = SQL.homeSQL();
		API.query(sql)
			.then((result) => {
				res.send(result[0]);
			})
	}
}

module.exports = new RouteController();