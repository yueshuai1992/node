var fs = require("fs");
var checkUser = function(option,next){
	fs.readFile("data/userlist.json","utf8",function(err,data){
		var userlist = JSON.parse(data);
		for(var i in userlist){
			if(option.username == userlist[i].username && option.password == userlist[i].password){
				next(true);
				return;
			}
		}
		next(false);
	})
}

module.exports = {
	checkUser:checkUser
};