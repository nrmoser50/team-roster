// importing Employee constructor 
const Employee = require('./Employee');

// manager constructor extends employee constructor 
class Manager extends Employee {
    constructor (name, id, email, role, officeNumber) {
        // calling employee constructor
        super (name, id, email); 

        if (role === '') {
            this.role = 'Employee';
        } else {
            this.role = role;
        }
        
        this.officeNumber = officeNumber; 
    }
    getOfficeNumber () {
        return this.officeNumber
    }
    // override employee role to manager 
    getRole () {
        if (this.role === '') {
            return 'Employee';
        } else {
            return this.role;
        }
    }
}

// to be exported 
module.exports = Manager; 