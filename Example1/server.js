const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;
const fs = require("fs");
const path = require("path");
const helloWorldPath = path.resolve("./Example1/HelloWorld.html");

//Place your name here
const name = "Bob"

function main(req,res)
{
    if ((req.url == "/" || req.url == "/home") && req.method == "GET"){
        console.log("home page served");
        console.log(helloWorldPath);
        res.end(fs.readFileSync(helloWorldPath));
    }
    else if (req.url == "/getName"&& req.method == "GET")
    {   
        console.log("Name Served");
        res.setHeader("Access-Control-Allow-Origin","*");;
        res.end(name);
    }
}

const server=http.createServer(main);

server.listen(port,hostname,() => console.log("Server started"));