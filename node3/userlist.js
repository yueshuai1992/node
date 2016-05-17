var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.set("view engine","jade");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));
app.get("/",function(req,res){
	res.render("userlist");
})
app.post("/login",function(req,res){
	var obj = req.form;
	var obj2 = req.body;
	console.log(obj);
	console.log(obj2)
})
app.listen(3000);
console.log("启动")