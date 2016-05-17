var express = require("express");
var fs = require("fs");
var app = express();
app.use(express.static("public"));
app.set("view engine","jade");
app.get("/",function(req,res){
	res.render("form")
})
function checkUser(opi,next){
	fs.readFile("data/userlist.json","utf8",function(err,data){
		var userlist = JSON.parse(data);
		for(var i in userlist){
			if(userlist[i].username==opi.username&&userlist[i].password==opi.password){
					next(true);
					return;
			}

		}
		next(false)
	})
}
app.get("/login",function(req,res){
	checkUser(req.query,function(result){
		if(result){
			res.render("list")
		}
		else{
			res.redirect("/");
		}
	})
})
app.get("/enroll",function(req,res){
	fs.readFile("data/userlist.json","utf8",function(err,data){
		var enroll = JSON.parse(data);
		enroll.push(req.query);
		var enrollStr = JSON.stringify(enroll,null,4);
		fs.writeFile("data/userlist.json",enrollStr);
		res.render("list")
	})
})
app.get("/booklist",function(req,res){
	var obj= req.query;
	fs.readFile("data/book.json","utf8",function(err,data){
		var booklist = JSON.parse(data);
		for (var i in booklist){
		}
		if(booklist[i].isbn!=obj.isbn){
				booklist.push(obj);
		}
		var booklistStr = JSON.stringify(booklist,null,4)
		fs.writeFile("data/book.json",booklistStr)
		res.render("book",{booklist:booklist})
	})
})
app.get("/userlist",function(req,res){
	var obj= req.query;
	fs.readFile("data/user.json","utf8",function(err,data){
		var userlist = JSON.parse(data);
		for (var i in userlist){
		}
		if(userlist[i].name!=obj.name){
				userlist.push(obj);
		}
		var userlistStr = JSON.stringify(userlist,null,4);
		fs.writeFile("data/user.json",userlistStr);
		res.render("userlist",{userlist:userlist})
	})
})
app.get("/zhangsan",function(req,res){
	fs.readFile("data/user.json","utf8",function(err,data){
		var userlist = JSON.parse(data);
		for(var i in userlist){
			if(userlist[i].name=="张三"){
				var obj = userlist[i]
				res.render("zhangsan",{zhangsan:obj})
			}
		}
	})
})
app.get("/wangwu",function(req,res){
	fs.readFile("data/user.json","utf8",function(err,data){
		var userlist = JSON.parse(data);
		for(var i in userlist){
			if(userlist[i].name=="王五"){
				var obj = userlist[i]
				res.render("wangwu",{wangwu:obj})
			}
		}
	})
})
app.get("/zhaosi",function(req,res){
	fs.readFile("data/user.json","utf8",function(err,data){
		var userlist = JSON.parse(data);
		for(var i in userlist){
			if(userlist[i].name=="赵四"){
				var obj = userlist[i]
				res.render("zhaosi",{zhaosi:obj})
			}
		}
	})
})
app.listen(8080);
console.log("启动")
