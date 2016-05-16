// ---------one---express模块的使用---------
// var express = require("express");//引入express模块
// var app = express();//使app成为服务器
// app.get("/",function(req,res){//---"/"为根目录，即访问根目录时发送请求---
// 	res.send("hello");//服务器响应请求，即返回一个字符串"hello"。
// });
// app.get("/userlist",function(req,res){//---"/userlist"为根目录下的userlist子目录，即访问userlist子目录时发送请求---
// 	res.send("hello userlist");//服务器响应请求，即返回一个字符串"hello userlist"。
// });
// app.listen(3000);
// console.log("服务器已经启动！");

// ---------two---通过express创建静态目录(一)---------
// var express = require("express");//引入express模块
// var app = express();//使app成为服务器
// app.use(express.static("public"));

// app.get("/",function(req,res){//---"/"为根目录，即访问根目录时发送请求---
// 	res.send("hello");//服务器响应请求，即返回一个字符串"hello"。
// });
// app.get("/userlist",function(req,res){//---"/userlist"为根目录下的userlist子目录，即访问userlist子目录时发送请求---
// 	res.send("hello userlist");//服务器响应请求，即返回一个字符串"hello userlist"。
// });
// app.listen(3000);
// console.log("服务器已经启动！");

// ---------three---通过express创建静态目录(二)---------
// 当根目录中没有index.html文件时，在浏览器地址栏中输入"localhost:3000"回车后会显示userlist.html页面的内容。
var express = require("express");//引入express模块
var fs = require("fs");
var app = express();//使app成为服务器

app.use(express.static("public"));
app.get("/",function(req,res){//---"/"为根目录，即访问根目录时发送请求---
	fs.readFile("public/userlist.html","utf8",function(err,data){
		res.send(data);
	});
});

app.get("/userlist",function(req,res){//---"/userlist"为根目录下的userlist子目录，即访问userlist子目录时发送请求---
	res.send("hello userlist");//服务器响应请求，即返回一个字符串"hello userlist"。
});
app.listen(3000);
console.log("服务器已经启动！");