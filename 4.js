const fs = require('fs');
const readStream = fs.createReadStream('./a.txt');
const writeStream = fs.createWriteStream('./a.txt', 'utf8');
readStream.on('data', (chunk) => {
  // 接收到数据时触发
  console.log('读取到数据---------------------\n' + chunk);
})
.on('error', (err) => {
  // 出现错误时触发
  console.log('出错了'+err.message);
})
.on('end', () => {
  // 文件读取完毕后触发
  console.log('读取完成')
})
.on('close', () => {
  console.log('已经关闭')
})
