var fs = require("fs");
fs.readFile("data/userlist.json","utf8",function(err,data){
	var userlist = JSON.parse(data);
	var replace = function(url,option,newOption){

		for(var i in userlist){
			if(userlist[i].username==option.username&&userlist[i].age==option.age){
				userlist[i].username=newOption.username;
				userlist[i].age=newOption.age;

			}
		}
		var userlistStr = JSON.stringify(userlist,null,4);
		fs.writeFile(url,userlistStr);
	}
	var old = {"username": "bb","age": 20};
	var neval = {"username":"bb","age":30};
	replace("data/userlist.json",old,neval)

})