class SQL {
	constructor(){}
    //注册查询用户资料
	registerSQL (o) {
		return "INSERT INTO `t_reged` (`pwd` , `phone` , `registerTime`, `uname`) VALUES ('"+ o.pwd +"','"+ o.phone +"','"+ o.Time +"','"+ o.name_length +"')";
	}
    //登陆查询手机号是否存在
    findOneSQL(o,field){
    	return "SELECT `" + field + "` FROM `t_reged` WHERE `" + field + "` = '" + o[field] + "'";
    }
    //邮箱查询
    emailSQL(o){
        return "SELECT `email` FROM `t_reged` WHERE `email` = '"+ o.email +"'";
    }
    //登陆功能验证
    loginSQL(o,field1,field2){
    	return [
        "SELECT `"+ field1 +"`,`"+ field2 +"`,`uname` , `uid` , `ger` FROM `t_reged` WHERE `"+ field1 +"` = '"+ o[field1] +"' AND `"+ field2 +"` = '"+ o[field2] +"'",
            "SELECT * FROM `t_reged` WHERE `loginstatus` = '0' AND `phone` = '"+ o[field1] +"' AND `pwd` = '"+ o[field2] +"'"
        ];
    }
    //登陆成功修改用户的状态
    loginstatusSQL(o,val){
        return [
            "UPDATE `t_reged` SET `loginstatus` = "+ val +" WHERE `phone` = '"+ o.phone +"'",
            "SELECT `area` , `detailed_area` FROM `t_address` WHERE `default` = '1'"
        ];
    }
   //首页数据查询
    homeSQL(){
        return [
        "SELECT * FROM `t_ad` WHERE `ad_name` = 'abv'",
        "SELECT `name`,`image` FROM `t_goods_category` WHERE `is_hot` = '1'",
        "SELECT * FROM `t_product` WHERE `class` = 001 OR `class` = 002 OR `class` = 003 OR `class` = 004",
        "SELECT `name` FROM `t_goods_category` WHERE `is_hot` = '0'"
        ]; 
    }
    //产品详情情页数据查询
    product_dataSQL(o,id){
        return "SELECT * FROM `t_product` WHERE `pid` = '"+ o.id +"'";
    }
    //订单数据查询
    orderSQL(){
       return [
       "SELECT * FROM `t_order`",
       "SELECT * FROM `t_product` WHERE `class` = 001 OR `class` = 002"
       ];
    }
    //修改密码验证
    forget_pwdSQL(o){
        return [
        "UPDATE `t_reged` SET `pwd` ='"+ o.pwd +"' WHERE `phone` = '"+ o.phone +"'",
        "UPDATE `t_reged` SET `pwd` ='"+ o.pwd +"' WHERE `email` = '"+ o.email +"'",
        ];
    }

    //购物车数据查询
    shoppingSQL(o){
        return [
        "SELECT * FROM `t_shopping`",
        "SELECT * FROM `t_product` WHERE `class` ='001'",
        "INSERT INTO `t_shopping` (`image` , `price` , `sum` , `name` , `uid`,`pid`) VALUES ('"+ o.image +"','"+ o.price +"','"+ o.sum +"','"+ o.name +"','"+ o.uid +"','"+ o.pid +"')"
        ];
    }
    //退货数据查询
    returnsSQL(){
        return "SELECT * FROM `t_order` WHERE `status_s` = '4'";
    }
    //订单删除
    Delete_orderSQL(id){
        return "DELETE FROM `t_order` WHERE `oid` = '"+ id +"'";
    }
    //添加地址
    addressSQL(o){
        return [
        "INSERT INTO `t_address` (`aname`,`uname`,`uphone`,`aphone`,`area`,`detailed_area`) VALUES ('"+ o.aname +"','"+ o.uname +"','"+ o.uphone +"','"+ o.aphone +"','"+ o.area +"','"+ o.detailed_area +"')",
        "SELECT * FROM `t_address`"
        ]
    }
    //修改个人资料
    mine_dataSQL(o,field1,field2,field3){
        return "UPDATE `t_reged` SET `"+ field1 +"` = '"+ o[field1] +"' , `"+ field2 +"` = '"+ o[field2] +"' , `"+ field3 +"` = '"+ o[field3] +"' WHERE `uid` = '"+ o.uid +"'";
    }
}

module.exports = new SQL();