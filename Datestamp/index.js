const os = require('os');
const http = require('http');
const fs = require('fs')
const PORT = 8000
let stamp = Date.now()
// fs.writeFileSync('sample.txt','new sample')
http.createServer((req,res)=>{
    fs.writeFileSync('sample.txt',stamp.toString())

  res.writeHeader(200,{'Content-Type':'text/html'})

  fs.readFile('sample.txt',(err,data)=>{
    //   console.log(data)
      res.write(data)
      res.end()
  })
}).listen(PORT,()=>{ 
    console.log('listening at',PORT)
})