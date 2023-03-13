const app = require("../routes/index");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
  describe("GET rickandmorty/{id}", () => {
    it("Responde con status: 200", () => {
      agent.get("/onsearch/1").expect(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"', () => {
      // const res = await agent.get("/onsearch/1")
      //   const keys = Object.keys(res.body);
      //   expect(keys).toContain("id");
      //   expect(keys).toContain("name");
      //   expect(keys).toContain("species");
      //   expect(keys).toContain("gender");
      //   expect(keys).toContain("image");

      //   expect.assertions(1);

      return agent.get("/onsearch/1")
      .then(function (res) {
        const keys = Object.keys(res.body);
        expect(keys).toContain("id");
        expect(keys).toContain("name");
        expect(keys).toContain("species");
        expect(keys).toContain("gender");
        expect(keys).toContain("image");
      })

      
    });
    it("Si hay un error responde con status: 500", () => {
      agent.get("/onsearch/IDqueNoExiste").expect(500);
    });
  });
});
