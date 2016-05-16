var fs = require("fs");
fs.readFile("data/userlist.json","utf8",function(err,date){
	var replaceDate = function(url,option,replace){
		var userlist = JSON.parse(date);//将date中的文件作为数组赋值给userlist
		var arrNew = [];
		for(var i in userlist){
			if(userlist[i].name==option.name&&userlist[i].age==option.age){
				userlist[i].name=replace.name;
				userlist[i].age=replace.age;
				arrNew.push(userlist[i]);
			}else{
				arrNew.push(userlist[i]);
			}
		}
		userlist = JSON.stringify(arrNew,null,4);
		fs.writeFile(url,userlist);
	}
	var obj = {"name":"小明","age":10};
	var oldObj = {"name": "小明","age": 20};
	replaceDate("data/userlist.json",oldObj,obj);
})
