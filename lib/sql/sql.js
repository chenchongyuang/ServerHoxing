class SQL {
	constructor(){}

	registerSQL (o) {
		return "INSERT INTO `t_reged` (`pwd` , `phone` , `registerTime`, `uname`) VALUES ('"+ o.pwd +"','"+ o.phone +"','"+ o.Time +"','"+ o.name_length +"')";
	}
    
    findOneSQL(o,field){
    	return "SELECT `" + field + "` FROM `t_reged` WHERE `" + field + "` = '" + o[field] + "'";
    }

    loginSQL(o,field1,field2){
    	return "SELECT `"+ field1 +"`,`"+ field2 +"`,`uname` FROM `t_reged` WHERE `"+ field1 +"` = '"+ o[field1] +"' AND `"+ field2 +"` = '"+ o[field2] +"'";
    }
    
    loginstatusSQL(o,val){
        return "UPDATE `t_reged` SET `loginstatus` = "+ val +" WHERE `phone` = '"+ o.phone +"'";
    }

    homeSQL(){
        return [
        "SELECT * FROM `t_ad` WHERE `ad_name` = 'abv'",
        "SELECT `name`,`image` FROM `t_goods_category` WHERE `is_hot` = '1'",
        "SELECT * FROM `t_product` WHERE `class` = 001 OR `class` = 002 OR `class` = 003 OR `class` = 004",
        "SELECT `name` FROM `t_goods_category` WHERE `is_hot` = '0'"
        ]; 
    }

    product_dataSQL(o,id){
        return "SELECT * FROM `t_product` WHERE `pid` = '"+ o.id +"'";
    }

    orderSQL(){
       return [
       "SELECT * FROM `t_product` WHERE `whether_buy` = '1'",
       "SELECT * FROM `t_product` WHERE `class` = 001 OR `class` = 002"
       ];
    }
    forget_pwdSQL(o){
        return "UPDATE `t_reged` SET `pwd` ='"+ o.pwd +"' WHERE `phone` = '"+ o.phone +"'";
    }
    shoppingSQL(){
        return [
        "SELECT * FROM `t_shopping`",
        "SELECT * FROM `t_product` WHERE `class` ='001'"
        ];
    }
}

module.exports = new SQL();