const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();
// readFile 一边读，一边写入另一个文件
// stream
const inFile = fs.createReadStream('./a.txt');//打开可读流
const outFile = fs.createWriteStream('./a.txt.gz')//编辑打开可写流
inFile.pipe(gzip).pipe(outFile);//第一个pipe（）方法从来源可读流inFile中获取数据，第二个pipe()则将获取到的数据写入目标可写流outFile
