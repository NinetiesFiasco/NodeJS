const http = require("http");
  
http.createServer(function(request, response){
     
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
     
    if(request.url === "/home" || request.url === "/"){
        response.write("<h2>Первый сайт</h2>");
    }
    else if(request.url == "/about"){
        response.write("<h2>О первом сайте</h2>");
    }
    else{
        response.write("<h2>Not found</h2>");
    }
    response.end();
}).listen(8080);
