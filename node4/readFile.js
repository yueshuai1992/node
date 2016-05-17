var fs = require("fs");
fs.readFile("data/tempTxt.txt","utf8",function(err,data){
	// console.log("hello world");
	console.log(err);//err保存出错信息(是个对象)
	console.log(data);//data保存文件中的内容
});