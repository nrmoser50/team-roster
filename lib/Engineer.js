
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, role, github) {
        super(name, id, email);
        // If role is empty then it will === Employee
        if (role === '') {
            this.role = 'Employee';
        } else {
            this.role = role;
        }

        this.github = github;
    }
    getRole() {
        // If role is empty then use default role
        if (this.role === '') {
            return 'Employee'
        } else {
            return this.role;
        }
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;