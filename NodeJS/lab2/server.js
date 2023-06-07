console.log("hellooo");
const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  switch(req.url){
    case '/':
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end("<h1>Home page</h1>");
      break;

    case '/profile':
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(`
        <html>
          <head>
            <link rel='stylesheet' href='style.css'>
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          </head>
          <body>
            <h1>Profile page</h1>
            <img src='./image.jpg' />
            <video src='./video.mp4' width="320" height="240" controls>
            </video>
          </body>
        <html>
      `);
      break;

      case '/favicon.ico':
      res.statusCode = 200;
      res.setHeader("Content-Type", "image/x-icon");
      const favicon = fs.readFileSync('./space.jpg');
      res.end(favicon);
      break;

    case '/style.css':
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/css");
      res.end("body{background-color:red}");
      break;

    case '/json':
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({username:'zeyad',age:25}));
      break;

    case '/image.jpg':
      res.statusCode = 200;
      res.setHeader("Content-Type", "image/jpeg");
      const image = fs.readFileSync('./space.jpg')
      res.end(image);
      break;
      
      case '/video.mp4':
      res.statusCode = 200;
      res.setHeader("Content-Type", "video/mp4");
      const video = fs.readFileSync('./subway.mp4')
      res.end(video);
      break;
    
      default:
        res.statusCode =404;
        res.setHeader("Content-Type", "text/html");
        res.end('<h1>page not found</h1>')
        break;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
