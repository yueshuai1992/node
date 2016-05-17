var fs = require("fs");
var express = require("express");
var app = express();
var name = require("./module/module")
app.use(express.static("public"));


app.get("/login", function(req,res){
	// console.log(req.query)
	var str="";
	name.checkUser(req.query,function(result){
		// console.log(result)

		if(result){
			str = "success";
		}
		else{
			str = "err";
		}
		res.send(str);
	})
})
app.listen(3000);
console.log("启动")