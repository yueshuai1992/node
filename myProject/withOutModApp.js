// 不做登录验证，直接显示书籍列表。
var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser");

var app = express();
app.set("view engine","jade");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/",function(req,res){
	res.render("login");
})

app.post("/login",function(req,res){
	fs.readFile("data/booklist.json","utf8",function(err,data){
		var booklist = JSON.parse(data);
		res.render("booklist",{"data":booklist});
	})
})

app.listen(3000);
console.log("服务器已经启动！");