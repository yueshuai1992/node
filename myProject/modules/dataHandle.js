var fs = require("fs");

var addData = function(dataUrl,option,next){
	fs.readFile(dataUrl,"utf8",function(err,data){
		if(!err){
			var userList = JSON.parse(data);
			userList.push(option);
			var userStr = JSON.stringify(userList,null,4);
			fs.writeFile(dataUrl,userStr,function(err){
				if(err){
					console.log(err);
				}else{
					console.log("数据添加成功！");
				}
			})

		}
		next(err);
	})
}

var deleteData = function(dataUrl,option,next){
	fs.readFile(dataUrl,"utf8",function(err,data){
		if(!err){
			var userList = JSON.parse(data);
			var newUserList = [];
			for(var i in userList){
				if(userList[i].name == option.name && userList[i].age == option.age){
					continue;
				}
				newUserList.push(userList[i]);
			}
			var userStr = JSON.stringify(newUserList,null,4);
			fs.writeFile(dataUrl,userStr,function(err){
				if(err){
					console.log(err);
				}else{
					console.log("数据删除成功！");
				}
			})
		}
		next(err);
	})
}

var updateData = function(dataUrl,oriOpi,newOpi,next){
	fs.readFile(dataUrl,"utf8",function(err,data){
		if(!err){
			var userList = JSON.parse(data);
			for(var i in userList){
				if(userList[i].name == oriOpi.name && userList[i].age == oriOpi.age){
					userList[i].name = newOpi.name;
					userList[i].age = newOpi.age;
				}
			}
			var userStr = JSON.stringify(userList,null,4);
			fs.writeFile(dataUrl,userStr,function(err){
				if(err){
					console.log(err);
				}else{
					console.log("数据修改成功！");
				}
			})
		}
		next(err);
	})
}

var selectData = function(dataUrl,next){
	fs.readFile(dataUrl,"utf8",function(err,data){
		var jsonData = JSON.parse(data);
		next(err,jsonData);
	})
}

module.exports = {
	addData:addData,
	deleteData:deleteData,
	updateData:updateData,
	selectData:selectData
}