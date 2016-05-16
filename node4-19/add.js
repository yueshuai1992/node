var fs = require("fs");
fs.readFile("data/userlist.json","utf8",function(err,data){
	var userlist = JSON.parse(data);
	var obj = {"name":"ddd","age":30};
	userlist.push(obj);
	userlistStr = JSON.stringify(userlist,null,4);
	fs.writeFile("data/userlist.json",userlistStr)

})