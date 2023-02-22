//testing Manager class
const Manager = require('../Lib/manager');

describe("manager", () => {
    describe("managerObj", () => {
      it("should give manager object", () => {
        const parameter1 = "name";
        const parameter2 = "id";
        const parameter3 = "email";
        const parameter4 = "officenumber";
        const managerObj = {"email": 'email', "id": 'id', "name": 'name', "officenumber":"officenumber" };
        const result = new Manager.Manager(parameter1,parameter2,parameter3,parameter4);
        expect(result).toEqual(managerObj);
      });
    });
});