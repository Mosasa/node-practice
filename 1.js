const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,//process进程模块,stdin 输入
  output: process.stdout
});

rl.question('please input a word:', function(answer){//回调函数:根据用户输入进行响应
  //(预先提示指定的query，然后用户应答后触发指定的callback。 显示指定的query给用户后，当用户的应答被输入后，就触发了指定的callback)
  console.log('You has entered [%s]', answer.toLocaleUpperCase());//%s 为占位符，表示该地需要一个参数去替换
  rl.close();
});