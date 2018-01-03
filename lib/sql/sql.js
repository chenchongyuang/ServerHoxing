class SQL {
	constructor(){}

	registerSQL (o) {
		return "INSERT INTO `t_reged` (`pwd` , `phone` , `registerTime`) VALUES ('"+ o.pwd +"','"+ o.phone +"','"+ o.Time +"')";
	}
    
    findOneSQL(o,field){
    	return "SELECT `" + field + "` FROM `t_reged` WHERE `" + field + "` = '" + o[field] + "'";
    }

    loginSQL(o,field1,field2){
    	return "SELECT `"+ field1 +"`,`"+ field2 +"` FROM `t_reged` WHERE `"+ field1 +"` = '"+ o[field1] +"' AND `"+ field2 +"` = '"+ o[field2] +"'";
    }
}

module.exports = new SQL();