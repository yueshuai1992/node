var express = require("express");//引入express模块
var bodyParser = require("body-parser");
var fs = require("fs");

var app = express();//使app成为服务器
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));

app.get("/",function(req,res){//---"/"为根目录，即访问根目录时发送请求---
	res.send("hello");//服务器响应请求，即返回一个字符串"hello"。
});

// app.get("/login",function(req,res){
// 	res.send("hello login success！");
// });

app.get("/login",function(req,res){//------"/login"不能写成"login"------
	// var obj = req.query;//query可以获取前台传过来的参数
	// console.log(obj);//{ username: '123', password: '123' }
	var username = "ma";
	var password = "123456";
	if(req.query.username == username && req.query.password == password)
	{
		res.send("login success！");
	}
	else{
		res.send("login failure！")
	}
});

// app.post("/login",function(req,res){//------"/login"不能写成"login"------
// 	// var obj = req.query;//query可以获取前台传过来的参数
// 	// console.log(obj);//{ username: '123', password: '123' }
// 	var username = "ma";
// 	var password = "123456";
// 	console.log(req.body);
// 	if(req.body.username == username && req.body.password == password)
// 	{
// 		res.send("login success！");
// 	}
// 	else{
// 		res.send("login failure！")
// 	}
// });

app.post("/login",function(req,res){//------"/login"不能写成"login"------
	fs.readFile("data/userlist.json","utf8",function(err,data){
		var userlist = JSON.parse(data);
		console.log(req.body);
		for(var i = 0;i < userlist.length;i++)
		{
			if(req.body.username == userlist[i].username && req.body.password == userlist[i].password)
			{
				var result = "login success！";
				break;
			}
			else{
				continue;
			}
		}
		if(i >= userlist.length)
		{
			var result = "login failure！";
		}
		res.send(result);
	});
});

app.get("/userlist",function(req,res){//---"/userlist"为根目录下的userlist子目录，即访问userlist子目录时发送请求---
	res.send("hello userlist");//服务器响应请求，即返回一个字符串"hello userlist"。
});
app.listen(3000);
console.log("服务器已经启动！");