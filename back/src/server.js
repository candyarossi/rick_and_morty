// var http = require("http");
// var characters = require("./utils/data.js");

// http
//   .createServer(function (req, res) {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     if (req.url.includes("rickandmorty/")) {
//       let idCharacter = req.url.split("/").pop();
//       let character = characters.find((e) => e.id == idCharacter);
//       res
//         .writeHead(200, { "Content-Type": "application/json" })
//         .end(JSON.stringify(character));
//     }
//   })
//   .listen(3001, "localhost");

var http = require("http");
var { getCharById } = require("./controllers/getCharById.js");
var { getCharDetail } = require("./controllers/getCharDetail.js");

http
  .createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url.includes("onsearch/")) {
      let idCharacter = req.url.split("/").pop();
      getCharById(res, idCharacter);
    }
    if (req.url.includes("detail/")) {
      let idCharacter = req.url.split("/").pop();
      getCharDetail(res, idCharacter);
    }
  })
  .listen(3001, "localhost");
