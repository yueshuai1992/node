var arr = ["zhang","wang","li","zhao"];
// arr.splice(2,1);//删除下标为2的元素
// console.log(arr);//[ 'zhang', 'wang', 'zhao' ]
arr.splice(2,1,"ma","yue");//在下标为2的元素处删除一个元素，并且在此位置插入"ma"、"yue"两个元素。
console.log(arr);//[ 'zhang', 'wang', 'ma', 'yue', 'zhao' ]
