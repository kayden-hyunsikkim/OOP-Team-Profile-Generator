const {Employee} = require('./employee.js');

class Manager extends Employee {
    constructor (name, id,email,officemunber) {
        super (name, id, email);
        this.officemunber = officemunber;
    }

   
}



module.exports = {
    Manager
  };
  