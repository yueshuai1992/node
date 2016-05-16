var http = require("http");//引入http模块
http.createServer(function(req,res){//创建服务器
	res.end("hello world");
}).listen("3000");
console.log("服务器已经启动！");