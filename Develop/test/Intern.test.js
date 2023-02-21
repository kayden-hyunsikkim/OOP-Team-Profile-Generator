const Intern = require('../Lib/Intern');

describe("Intern", () => {
    describe("InternObj", () => {
      it("should give Intern object", () => {
        const parameter1 = "name";
        const parameter2 = "id";
        const parameter3 = "email";
        const parameter4 = "school";
        const InternObj = {"email": 'email', "id": 'id', "name": 'name', "school":"school" };
        const result = new Intern.Intern(parameter1,parameter2,parameter3,parameter4);
        expect(result).toEqual(InternObj);
      });
    });
});