// var axios = require("axios");

// const getCharDetail = (res, ID) => {
//   axios
//     .get(`https://rickandmortyapi.com/api/character/${ID}`)
//     .then(({ data }) => {
//       const obj = {
//         id: data.id,
//         image: data.image,
//         name: data.name,
//         gender: data.gender,
//         species: data.species,
//         status: data.status,
//         origin: data.origin,
//       };
//       res
//         .writeHead(200, { "Content-Type": "application/json" })
//         .end(JSON.stringify(obj));
//     })
//     .catch((err) => {
//       //console.log(err)
//       res.writeHead(500, { "Content-Type": "text/plain" }).end(err.message);
//     });
// };

// module.exports = { getCharDetail };

var axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharDetail = (req, res) => {
  const params = req.params;

  axios
    .get(`${URL}${params.id}`)
    .then(({ data }) => {
      const obj = {
        id: data.id,
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species,
        status: data.status,
        origin: data.origin,
      };
      res.status(200).json(obj);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};

module.exports = { getCharDetail };
