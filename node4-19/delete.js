var fs = require("fs");
fs.readFile("data/userlist.json","utf8",function(err,data){
	var userlist = JSON.parse(data);
	var deletFile = function(url,option){
		var newArr = [];
		for( var i in userlist){
			if(userlist[i].username==option.username&&userlist[i].age==option.age){
				continue;
			}else{
				newArr.push(userlist[i]);
			}
		}
		var userlistStr = JSON.stringify(newArr,null,4);
		fs.writeFile(url,userlistStr)
	};
	var obj = {"name":"ddd","age":30};
	deletFile("data/userlist.json",obj);
})