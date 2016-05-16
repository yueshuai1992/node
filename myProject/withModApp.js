var express = require("express");
var bodyParser = require("body-parser");
var user = require("./modules/user");
var dataHandle = require("./modules/dataHandle");
var app = express();

app.set("view engine","jade");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/",function(req,res){
	res.render("login");
})

app.post("/index",function(req,res){
	user.checkUser(req.body,function(info){
		if(info){
			res.render("index");
		}else{
			res.render("login",{"info":"登录失败"});
		}
	})
})

app.get("/user",function(req,res){
	dataHandle.selectData("data/userlist.json",function(err,data){
		res.render("userlist",{"data":data});
	})
})

app.get("/book",function(req,res){
	dataHandle.selectData("data/booklist.json",function(err,data){
		res.render("booklist",{"data":data});
	})
})

app.get("/adduser",function(req,res){
	res.render("adduser");
})

app.get("/insertuser",function(req,res){
	dataHandle.addData("data/userlist.json",req.query,function(err){
		res.redirect("/user");  //页面重定向
	})
})

app.listen(3000);
console.log("服务器启动成功！");