var http = require('http');

http.createServer(function(request, response){
    console.log('request: ' + request.headers.host);

    var port;

    switch(request.headers.host){
        case "fsite.home": port = 8080; break;
        case "ssite.home": port = 8090; break;
    }

    var options = {
        hostname: 'localhost',
        port: port,
        path: request.url,
        method: request.method,
        headers: request.headers
    };

    var proxy = http.request(options, function (res) {
        response.writeHead(res.statusCode, res.headers)
        res.pipe(response, {
            end: true
        });
    });

    request.pipe(proxy, {
        end: true
    });
}).listen(80);
