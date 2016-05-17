var fs = require("fs");


function checkUser(opi,next){
	fs.readFile("data/form.json","utf8",function(err,data){
		var userlist = JSON.parse(data);
		for(var i in userlist){
			if(userlist[i].username==opi.username&&userlist[i].password==opi.password){
					next(true);
					return;
			}

		}
		next(false)
	})
}

module.exports ={
	checkUser:checkUser
}