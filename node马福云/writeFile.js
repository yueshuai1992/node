var fs = require("fs");
fs.writeFile("data/write.txt","新建文件并写入该内容",function(err){
	if(err){
		console.log(err);
	}
	else{
		console.log("修改成功！");
	}
});