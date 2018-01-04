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

    abvImgSQL(){
        return "SELECT * FROM `t_ad` WHERE `ad_name` = 'abv'"; 
    }

    categorySQL(){
        return "SELECT `name`,`image` FROM `t_goods_category` WHERE `is_hot` = '1'";
    }
}

module.exports = new SQL();