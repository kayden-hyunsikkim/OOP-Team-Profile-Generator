const Engineer = require('../Lib/engineer');

describe("engineer", () => {
    describe("engineerObj", () => {
      it("should give engineer object", () => {
        const parameter1 = "name";
        const parameter2 = "id";
        const parameter3 = "email";
        const parameter4 = "Github";
        const engineerObj = {"email": 'email', "id": 'id', "name": 'name', "Github":"Github" };
        const result = new Engineer.Engineer(parameter1,parameter2,parameter3,parameter4);
        expect(result).toEqual(engineerObj);
      });
    });
});