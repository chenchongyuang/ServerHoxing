const Utils = require(__basename + '/utils/utils.js');

const API = require(__basename + '/service/api.js');

const SQL = require(__basename + '/lib/sql/sql.js');

const common =require(__basename + '/common/common.js');

class RouteController {
	constructor () {}
    //短信验证功能
	sendMessageController (req,res){
        //随机生成6位验证码

        let time = new Date().getTime().toString();
        
        let code = time.slice(time.length - 6);
         
        Utils.sendMessage(req.query.phone,code)
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
	//注册功能
	registerController(req,res){
	  
      //查询手机号是否被注册
      let selectSQL = SQL.findOneSQL(req.query,'phone');
      API.query(selectSQL)
        .then(result =>{
        	if(result[0].length == 1){
        		res.json(common.register.info);
        	}else{
	    		Utils.addCrypto(req.query,'pwd');
					  let sql = SQL.registerSQL(req.query);
					  API.query(sql)
						  .then(data =>{
						  	res.json(common.register.success);
						  }) 
						  .catch(err =>{
						  	console.log(3);
						  	res.json(common.register.error);
				 })
	          }
        })
        .catch(err =>{
        	console.log(4);
        	res.json(common.register.error);
        })
	  
	}

}

module.exports = new RouteController();