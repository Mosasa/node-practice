//提取日志中的访问时间和访问地址
var readline = require('readline');
var fs = require('fs');
 
var fReadName = 'access.log';
// var fWriteName = './readline.log';
var fRead = fs.createReadStream(fReadName);
// var fWrite = fs.createWriteStream(fWriteName);

var rl= readline.createInterface({
  input: fRead,
  output: process.stdout
})

rl.on('line', line => {//第一个line为事件名，第二个line为input的参数名
  const arr = line.split(' ');
  console.log('访问时间: %s %s, 访问地址: %s', arr[0], arr[1], arr[13]);
})



