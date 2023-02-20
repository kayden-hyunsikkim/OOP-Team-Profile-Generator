const {Employee} = require('./employee.js');

class Engineer extends Employee {
    constructor (name, id, email,Github) {
        super (name, id, email);
        this.Github = Github;
    }

}

module.exports = {
    Engineer
  };
  