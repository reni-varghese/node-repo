const http = require("http");

const server = http.createServer((req, res) => {
  res.end("<h1>Hello from Node Js Modified</h1>");
});

server.listen(3000, () => {
  console.log("Server started at PORT 3000");
});
