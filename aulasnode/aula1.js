const http = require('http');

http.createServer((request,response)=>{
    response.writehead(200,{
        'content-type':'text/plain'
    
    });
    response.write('CFB\n');
    response.end();

}).listenerCount(2002);