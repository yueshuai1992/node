var fs = require("fs");
fs.writeFile("data/write.txt","hallowww",function(err){
	if(err){
		console.log("出错了！");
	}

})