var fs = require("fs");
fs.readFile("data/userlist.json","utf8",function(err,date){
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
		userlist = JSON.stringify(arrNew,null,4);
		fs.writeFile(url,userlist);
	}
	var obj = {"name":"小明","age":10};
	replaceDate("data/userlist.json",obj);
})
