var fs = require("fs");//引入文件模块
//读取json文件
//第一个参数为错误信息 第二个参数为文件内容
fs.readFile("data/userlist.json","utf8",function(err,data){
	console.log(err);
	console.log(data);//data获取到的是字符串
})