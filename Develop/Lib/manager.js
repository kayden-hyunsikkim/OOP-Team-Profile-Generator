//Making manager class with imported employee class
const {Employee} = require('./employee.js');

class Manager extends Employee {
    constructor (name, id,email,officenumber) {
        super (name, id, email);
        this.officenumber = officenumber;
    }

   
}


module.exports = {
    Manager
  };
  