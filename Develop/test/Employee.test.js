const employee = require('../Lib/employee');

describe("employee", () => {
    describe("employeeObj", () => {
      it("should give employee object", () => {
        const parameter1 = "name";
        const parameter2 = "id";
        const parameter3 = "email";
        const employeeObj = {"email": 'email', "id": 'id', "name": 'name'};
        const result = new employee.Employee(parameter1,parameter2,parameter3);
        expect(result).toEqual(employeeObj);
      });
    });
});