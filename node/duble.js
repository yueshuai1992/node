var http = require("http");//引入http模块
var fs = require("fs");//
var server =http.createServer(function(reg,res){
	fs.readFile("data/html.html","utf8",function(err,data){
		res.end(data)
	})
})
server.listen(1000);
console.log("成功启动");