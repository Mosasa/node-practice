// COMMONJS require NODE 内置支持的js模块化方案
// es6 module
// sea.js
const fs = require('fs');
let data;

const p = new Promise((resolve,reject) => {
fs.readFile('./f1.txt', 'utf8', (err,data) => {
  // console.log('真正的读取完成了');
  // console.log('文件内容' + data);
  if(err){
    reject(err);
  }else{
    resolve(data);
  }
});
});
p.then(data => {
  // data是上面调用resolve（）方法传入的值
  console.log('读取完成，做其它事情');
}).catch(e => {
  cnsole.log(e);
})
// var promise = Promise.resolve(fs.readFile());
// promise.then(function(value){
//   console.log(value);
// })
console.log('读取完成');