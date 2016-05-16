var fs = require("fs");
var express = require("express");
var app = express();
app.get("/",function(req,res){
	var  htmlTop = "<!DOCTYPE html>"+
					"<html lang='en'>"+
					"<head>"+
					"<meta charset='UTF-8'>"+
					"<title>form Exp</title>"+
					"</head>"+
					"<body><ul>";
	var htmlBottom = "</ul></body>"+
					"</html>";
	fs.readFile("data/form.json","utf8",function(err,data){
		var userlist = JSON.parse(data);
		var listStr="";
		for (var i in userlist){
			var li = "<li>"+userlist[i].password+ "</li>";
			listStr =listStr+li;
		}
		var html = htmlTop+listStr+htmlBottom;
		res.send(html)
	})
})
app.listen(3000);
console.log("启动")