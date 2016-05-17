var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
	fs.readFile("data/tempTxt.txt","utf8",function(err,data){
		res.end(data);
	});
});
server.listen(3000);
console.log("服务器已经启动！");