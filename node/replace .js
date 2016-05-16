var fs = require("fs");
fs.readFile("date/userlist.json","utf8",function(err,date){
	var replaceDate = function(url,replace){
		var userlist = JSON.parse(date);//将date中的文件作为数组赋值给userlist
		var arrNew = [];
		for(var i in userlist){
			if(userlist[i].name!=replace.name){
				arrNew.push(userlist[i]);
			}else{
				userlist[i].age = replace.age;
				arrNew.push(userlist[i]);
			}
		}
		var userlistStr = JSON.stringify(arrNew,null,4);
		fs.write("date/userlist",userlistStr);
	}
	var obj = {"name":"小明","age":10};
	replaceDate("date/userlist.json",obj);
})
