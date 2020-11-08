var http = require('http');
const { networkInterfaces } = require('os');

//create a server object:
http.createServer(function (req, res) {
   let data=networkInterfaces();
   let obj={
       processId:process.pid,
       ip:data
   }
   res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(obj))
}).listen(8080); 