var http = require("http");
var express = require("express");
var app = express();
app.get("/",function(reg,res){
	res.send("hello");
})
app.listen(3000);