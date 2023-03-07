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

// var http = require("http");
// var { getCharById } = require("./controllers/getCharById.js");
// var { getCharDetail } = require("./controllers/getCharDetail.js");

// http
//   .createServer(function (req, res) {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     if (req.url.includes("onsearch/")) {
//       let idCharacter = req.url.split("/").pop();
//       getCharById(res, idCharacter);
//     }
//     if (req.url.includes("detail/")) {
//       let idCharacter = req.url.split("/").pop();
//       getCharDetail(res, idCharacter);
//     }
//   })
//   .listen(3001, "localhost");

const express = require("express");
const server = express();
const PORT = 3001;

// Configuración con problema de CORS
// npm install cors --save
// ---
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, // access-control-allow-credentials: true
  optionSuccessStatus: 200,
};
server.use(cors(corsOptions)); // Use this after the variable declaration
// ---

const router = require("./routes/index.js");

server.use(express.json());

server.use("/", router);

server.listen(PORT, () => {
  console.log("Server raised in port " + PORT);
});
