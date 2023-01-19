class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        // If role is empty when adding a new employee
        this.role = "Employee";
       
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Employee;