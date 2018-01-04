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
         res.send({code});
        /*Utils.sendMessage(req.query.phone,code)
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
				})*/
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

	loginController(req,res){
		Utils.addCrypto(req.query,'pwd');
		let selectSQL1 = SQL.findOneSQL(req.query,'phone');
		let selectSQL2 = SQL.loginSQL(req.query,'phone','pwd');
		
		   API.query(selectSQL1)
		     .then(result =>{
		     	if(result[0].length === 1){
                    API.query(selectSQL2)
                      .then(result =>{
                      	if(result[0].length === 1){
                      		common.login.success.phone = result[0][0].phone;
                      		common.login.success.uname = result[0][0].uname;
                      		res.json(common.login.success);

                      		let updatsql = SQL.loginstatusSQL(req.query,1);
                      		API.query(updatsql)
                      		   .then(result =>{
 
                      		   	   res.json(common.login.success);
                      		   })
                      		   .catch(err =>{
                      		   	   res.json(common.login.info);
                      		   })
                      	}else{
                            res.json(common.login.error);
                      	}
                      })
		     	}else{
		     		res.json(common.login.info);
		     	}
		     })
		     .catch(err =>{
		     	res.json(common.login.info);
		     })
	}
    
	homeController(req,res){
		let selectSQL = SQL.abvImgSQL(req.query);
		let arr={};
        API.query(selectSQL)
          .then(result =>{
          	  arr.abvImg=result[0];
          	  let selectSQL1 = SQL.categorySQL(req.query);
          	  API.query(selectSQL1)
          	    .then(result =>{
          	    	arr.category=result[0];
          	    	res.json(arr);
          	    })
          	    .catch(err =>{
          	    	res.json(err);
          	    })
          })
          .catch(err =>{
          	res.send(err);
          })
         
	}

}

module.exports = new RouteController();