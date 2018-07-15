const http = require('http');
const fs = require('fs');
// 创建一个web服务器
const server = http.createServer((req, res) => {
  // req为请求对象，分析用户请求
  // 怎么得到首页index.html?
  if(req.url == '/'){
    const indexFile = fs.createReadStream('./index.html')//创建一个可读流
    res.writeHead(200, {
      'Content-Type':'text/html;charset=utf8'
    })//http响应头
    indexFile.pipe(res)
  }else if(req.url == '/info'){
    const info = {
      "name":"曾凯",
      "desc":"身骑白马"
    };
    res.writeHead(
      // 200 -> http状态码 ， content-type -> 文件内容格式 返回
      //如何去解析这一次的请求的到达
      200,{
        'Content-Type':'text/plain;charset=utf8'
      }
    )
    res.end(JSON.stringify(info))
  }
  // console.log('那个家伙又来了')
  // res.end('hello World，你要的反正不是首页')
})
server.listen(8081);