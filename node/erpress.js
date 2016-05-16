var fs = require("fs");
var express = require("express");
var app = express();
app.use(express.static("public"));
app.get("/login",function(req,res){

	fs.readFile("express/dada/userlist.json","utf8",function(err,data){
		var userlist = JSON.parse(data);//将date中的文件作为数组赋值给userlist
		for(i in userlist){
			if(userlist[i].username==req.query.username&&userlist[i].age==req.query.age){
				var x = "success";
				break;
			}
		}
		if(i==userlist.length-1){
			x ="lose"
			console.log(i)
		}
		res.send(x);

	})

})

app.listen(3000);
// var express = require("express");
// var app = express();
// app.use(express.static("public"));
// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(express.static("public"));
// app.get("/",function(req,res){
// 	res.send("hello");
// });
// app.post("/login",function(req,res){
// 	var username="lee";
// 	var password="aaa";
// 	console.log(req.body)
// 	if(req.body.username==username&&req.body.password==password){
// 		res.send("hello login seccess")
// 	}
// 	else{
// 		res.send("login lose!")
// 	}

// })
// app.get("/login",function(req,res){
// 	var username="lee";
// 	var password="aaa";
// 	if(req.query.name==username&&req.query.password==password){
// 		res.send("hello login seccess")
// 	}
// 	else{
// 		res.send("login lose!")
// 	}

// })
// app.get("/user",function(req,res){
// 	res.send("hello lose");
// })
// app.listen(3000);