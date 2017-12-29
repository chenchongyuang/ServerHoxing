let server = {
	host: '127.0.0.1',
	port: '9000'
};

exports.mysqlOptions = {
	host: server.host,
	user: 'root',
	password: 'love you',
	database: 'ng'
}

exports.server = server;