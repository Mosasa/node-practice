性能优化

http createServer (req res) => {callback}
web 一切皆资源

web server 资源（html, css, json, img） createReadStream(读)
将相应资源"传输"到客户端 client proxy

优化空间？
传输的体积能够减小,gzip
服务器端是可以进行文件操作 ：读写， 权限， 压缩及解压缩
客户端 
res.writeHead(200, {
  'Content-Type': 'text/html;charset=utf8'
})
带有压缩的字段， 解压后：unzip

减少传输体积，快 省带宽（服务器）