 var express = require("express");
 var app = express();
 const router= require('./src/routes/api')
  app.listen(5050,function(){
    console.log("server is running,,,,,,,,,");
  })