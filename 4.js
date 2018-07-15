const readline = require('readline');
const fs = require('fs')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'OHAI>'
})

const preHint = `
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See \`npm help json\` for definitive documentation on these fields
and exactly what they do.

Use \`npm install <pkg> --save\` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
`
console.log(preHint);

let index = 0; //游标：计数器
const questions= ['name', 'version', 'author'];
const defaultAnswers = ['name','1.0.0', 'none'];
const answers = []
function createPackageJSON() {
  var map = {};
  questions.forEach((question, index) => {
    map[question] = answers[index];
  });
  fs.readFileSync('./package.json', JSON.stringify(map, null, 4))
}
function runQuestionLoop() {
  if(index === questions.length){
    createPackageJSON();
    rl.close();
    return;
  }
  let defaultAnser = defaultAnswers[index];
  let question = questions[index] + ':(' + defaultAnswers[index] + ')';
  rl.question(question, function(answer) {
    answers.push(answer || defaultAnswers[index]);
    index++;
    runQuestionLoop();//在函数中调用自己 => 递归
  })
}
runQuestionLoop();

// const readline = require('readline');

// const questionArr = ['项目名称', '项目结构', '项目版本']
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// rl.question(questionArr[index], (answer) => {
//   index++;
//   if(answer.length < questionArr.length) {
    
//   }
  
// })