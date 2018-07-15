//自动完成
const readline = require('readline');

const completer = (line) => {
  const command = 'npm';
  const subCommands = ['help', 'init', 'install'];
  // 少于command时，补全一下，前提：line需要是command的一部分
  if(line.length < command.length) {
    console.log(command);
    return [command.indexOf(line) === 0 ? [command]:[],line];
  }
  // 实现：
//1.输入n，Tab之后补全为npm
//2.输入npm i，tab之后补全为install、init，不要help 
// (拿到filter的条件字符串， replace方法将npm )
  let hints = subCommands.filter(subCommands => {
    const lineTrippedCommand = line.replace(command, '').trim();//trim() 函数用于去除字符串两端的空白字符。
    return lineTrippedCommand && subCommands.indexOf(lineTrippedCommand) === 0
  });
  if(hints.length ===1) {
    hints = hints.map(function(hit) {
      return [command, hit].join(' ')
    })
  }

  // 匹配到多个？ 活着没有匹配到？
  return [hints.length ? hints: subCommands, line];
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  completer: completer  //用于 Tab 自动补全的可选函数。
});
rl.prompt();
