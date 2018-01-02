const Utils = require(__basename + '/utils/utils.js');

class RouteController {
	constructor () {}

	sendMessageController (req,res){
        //随机生成6位验证码

        let time = new Date().getTime().toString();
        
        let code = time.slice(time.length - 6);
         
        Utils.sendMessage(code)
        .then((data) => {
		    let {Code} = data;
		    if (Code === 'OK') {
		        //处理返回参数
		        res.json({code:code,msg:'发送成功',status:1})
		        console.log(data)
		    }
		}, (err) => {
		    console.log(err);
		    res.json({msg:'发送超时',status:0})
		})
	}

}

module.exports = new RouteController();