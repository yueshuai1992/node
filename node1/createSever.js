var http = require("http");//获取http模块
//请求require 响应response
//创建服务器
http.createServer(function(req,res){
	res.end("hello");
}).listen(3000);
console.log("服务器已经启动！")