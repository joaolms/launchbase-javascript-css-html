const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.use(express.static('public'));

// server.set("view engine", "html");
server.set("view engine", "njk"); // ler arquivos .njk

// Para usar o template agent
nunjucks.configure("views", {
  express: server
});

// Routes
server.get("/", function(req, res) {
  // return res.send("Hi!");
  return res.render("about");
});

server.get("/portfolio", function(req, res) {
  return res.render("portfolio");
});

// Server
server.listen(5000, function() {
  console.log("Server is running");
});
{% }