var fs = require("fs");//引入文件模块
//从指定文件中读取数据
// fs.readFile("data/userlist.json","utf8",function(err,data){
// 	var userlist = JSON.parse(data);
// 	var newUser = {"name":"haha","age":30};
// 	userlist.push(newUser);
// 	var jsonString = JSON.stringify(userlist,null,4);
// 	fs.writeFile("data/userlist.json",jsonString);
// 	console.log("数据加载成功！")
// })
// fs.readFile("data/userlist.json","utf8",function(err,data){
// 	var userlist = JSON.parse(data);
// 	var newUser = {"name": "xiaoming","age": 20};
// 	userlist.pop(newUser);
// 	var jsonString = JSON.stringify(userlist,null,4);
// 	fs.writeFile("data/userlist.json",jsonString);
// 	console.log("数据删除成功！")
	// var addDate = function(url,option){
	// 	var userlist = JSON.parse(data);
	// 	userlist.push(option);
	// 	userlist = JSON.stringify(userlist,null,4);
	// 	fs.writeFile(url,userlist);
	// 	console.log("数据加载成功！");
	// };
	// var x ={"name":"haha","age":30};
	// addDate("data/userlist.json",x);
fs.readFile("data/userlist.json","utf8",function(err,data){
	var deleDate = function(url,option){
		var userlist = JSON.parse(data);
		var arr =[];
		for(var i in userlist){
			// if(userlist[i].name==option.name&&userlist[i].age==option.age){
			// 	continue;
			// }else
			// {
			// 	arr.push(userlist[i]);
			// }
			//方法1
			// if(userlist[i].name!=option.name||userlist[i].age!=option.age){
			// 	arr.push(userlist[i]);
			// }
			//方法2
			if(userlist[i].name==option.name||userlist[i].age==option.age){
				userlist.splice(i,1)
			}

		}
		userlist = JSON.stringify(userlist,null,4);
		fs.writeFile(url,userlist);

	};
	var y ={"name": "xiaoming","age": 20};
	deleDate("data/userlist.json",y);
})
