var http = require("http");
const fs=require('fs');
const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  if(req.url=="/welcome"){
      res.writeHead(200,{
          'content-Type':'text/plain'
      })
      res.end("Welcome to Dominos!")
  }
  else if(req.url=="/contact"){
    res.writeHead(200,{
        'content-Type':' application/json'
    })
  res.end(JSON.stringify( {   "phone": 18602100000, 
    "email": "guestcaredominos@jublfood.com" }))
  }
  else{
     res.writeHead(404)
      res.end("Oops! Page not found ")
    
  }
}
httpServer.listen(8081,console.log("server is listening on port 8081"))
module.exports = httpServer;