module.exports = {
	register:{
		success:{
			msg:'注册成功',
			statusCode:200
		},
		info:{
			msg:'该手机已被注册',
			statusCode:201
		},
		error:{
			msg:'发生错误',
			statusCode:255
		}
	},
	login:{
		success:{
			msg:'登陆成功',
			statusCode:200
		},
		info:{
			msg:'该号码未注册',
			statusCode:201
		},
		error:{
			msg:'密码错误',
			statusCode:255
		}
	},
	

}