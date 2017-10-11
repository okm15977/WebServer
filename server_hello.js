//引用 node.js 內建的 http 模組
const http = require('http');

var port = process.env.PORT || 1234;

//建立一個 HttpServer
//req 從 client端發出來的
//res 是由我們寫出去給 client
var server =  http.createServer(function(req,res){//createServer 只有建立 沒有執行
    var resHeader = {
        'Accept-Charset': 'utf-8',
        'Accept-Language': 'zh-TW',
        'Content-Type':'text/html;charset = utf-8',
    };
    res.writeHead(200,resHeader);
    //writeHead是 寫 Headers
    //write 是 寫 Response
    res.write('<h1>Hello</h1>');
    res.write('<p>這是由node.js建立的 WebServer</p>');
    res.write('<p>已經成功連接到 Heroku 主機</p>');
    res.end();//沒寫end 可能資料只傳一半，end確保資料都送出去
});

//將 Server開啟 port 1234 執行起來
server.listen(port);//去網卡聽看看有沒有port= 1234的
console.log("Server running at http://127.0.0.1:"+port);