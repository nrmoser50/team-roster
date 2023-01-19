// importing Employee constructor 
const Employee = require('./Employee');

// manager constructor extends employee constructor 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling employee constructor
        super (name, id, email); 

     
        this.role = "Manager";

        this.officeNumber = officeNumber; 
    }
    getOfficeNumber () {
        return this.officeNumber
    }
    // override employee role to manager 
    getRole () {
      return this.role;
    }
}

// to be exported 
module.exports = Manager; 