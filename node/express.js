var express = require("express");
var app = express();
app.get("/",function(req,res){
	res.send("hello根目录");
});
app.get("/users",function(req,res){
	res.send("hello users")
});
app.listen(3000);
