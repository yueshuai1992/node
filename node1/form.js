var fs = require("fs");
var express = require("express");
var app = express();
app.use(express.static("public"));
app.get("/login",function(req,res){
	var obj = req.query;
	console.log(obj);
	fs.readFile("data/form.json","utf8",function(err,data){
		var userlist = JSON.parse(data);
		console.log(userlist);
		for(var i in userlist){
			if(userlist[i].username==obj.username&&userlist[i].password==obj.password){
				var x = "登录成功"
				break;
			}
		}
		if(i==userlist.length){
			x="登录失败"
		}
		res.send(x)
	})
})
app.listen(3000);