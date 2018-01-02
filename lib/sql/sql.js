class SQL {
	constructor(){}

	registerSQL (o) {
		return "INSERT INTO `t_reged` (`pwd` , `phone` , `registerTime`) VALUES ('"+ o.pwd +"','"+ o.phone +"','"+ o.Time +"')";
	}
    
    findOneSQL(o,field){
    	return "SELECT `" + field + "` FROM `t_reged` WHERE `" + field + "` = '" + o[field] + "'";
    }
}

module.exports = new SQL();