var express = require("express");
var fs = require("fs");
var app = express();
app.use(express.static("public"))
app.set("view engine","jade");
app.get("/",function(req,res){
	res.render("userlist",{title:"first jade page"})
})
app.get("/fruit",function(req,res){
	fs.readFile("data/showjade.json","utf8",function(err,data){
		var showlist = JSON.parse(data)
		res.render("fruit",{list:showlist})
	})

})
app.get("/sport",function(req,res){
	fs.readFile("data/sport.json","utf8",function(err,data){
		var sport = JSON.parse(data)
		res.render("sport",{list2:sport})
	})
})
app.listen(3000);
console.log("hello jade")