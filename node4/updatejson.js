var fs = require("fs");
fs.readFile("data/userlist.json","utf8",function(err,data){
	// // console.log(typeof data);
	// var userlist = JSON.parse(data);
	// // console.log(typeof userlist);
	// // console.log(userlist[0].name);
	// var addUser = {"name":"ming","age":45};
	// userlist.push(addUser);
	// userlist = JSON.stringify(userlist,null,4);//调整缩进为4个空格
	// fs.writeFile("data/userlist.json",userlist);
	// console.log("数据添加成功！");

	var addData = function(url,option){
		var userlist = JSON.parse(data);
		userlist.push(option);
		userlist = JSON.stringify(userlist,null,4);//调整缩进为4个空格
		fs.writeFile(url,userlist);
		console.log("数据添加成功！");
	};

	var deleteData1 = function(url,option){
		var userlist = JSON.parse(data);
		var newUserList = [];
		for(var i = 0;i < userlist.length;i++)
		{
			var user = userlist[i];
			if(user.name == option.name && user.age == option.age)
			{
				continue;
			}
			else{
				console.log(user);
				newUserList.push(user);
			}
		}
		var stringUserList = JSON.stringify(newUserList,null,4);//调整缩进为4个空格
		fs.writeFile(url,stringUserList);
		console.log("数据删除成功！");
	};

	var updateData = function(url,oldOpt,newOpt){
		var userlist = JSON.parse(data);
		for(var i = 0;i < userlist.length;i++)
		{
			var user = userlist[i];
			if(user.name == oldOpt.name && user.age == oldOpt.age)
			{
				userlist[i].name = newOpt.name;
				userlist[i].age = newOpt.age;
			}
			else{
				continue;
			}
		}
		var stringUserList = JSON.stringify(userlist,null,4);//调整缩进为4个空格
		fs.writeFile(url,stringUserList);
		console.log("数据修改成功！");
	};

	var user = {"name":"ming","age":45};
	var newUser = {"name":"ma","age":50};
	// addData("data/userlist.json",user);
	// deleteData1("data/userlist.json",user);
	updateData("data/userlist.json",user,newUser);
});