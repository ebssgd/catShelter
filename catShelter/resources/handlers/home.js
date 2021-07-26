const url = require("url");
const fs = require("fs");
const path = require("path");
const cats = require("..data.cats");

module.exports = (req, res) => {
  const pathname = url.parse(req.url).pathname;
};

if (pathname === "/" && req.method === "GET") {
  //TODO: Implement the logic for showing the home html view
} else {
  return true;
}
