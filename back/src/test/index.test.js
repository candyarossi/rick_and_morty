const app = require("../routes/index");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
  describe("GET rickandmorty/{id}", () => {
    it("Responde con status: 200", () => {
      agent.get("/onsearch/1").expect(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"', () => {
      const res = agent.get("/onsearch/1");

      console.log(res);
      
         const objKeys = Object.keys(res.data);
         expect(objKeys).toContain('id');
      //    expect(objKeys).toContain('name');
      //    expect(objKeys).toContain('species');
      //    expect(objKeys).toContain('gender');
      //    expect(objKeys).toContain('image');
    });
    it("Si hay un error responde con status: 500", () => {
      agent.get("/onsearch/IDqueNoExiste").expect(500);
    });
  });
});
