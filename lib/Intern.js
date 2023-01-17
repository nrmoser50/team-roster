const Employee =  require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, role, school) {
    super(name, id, email);

    this.school = school;

    if (role === '') {
        this.role = 'Employee'
    } else {
        this.role = role;
    }
}
getRole() {
    if (this.role === '') {
        return 'Employee';
    } else {
        return this.role;
    }
}
getSchool() {
    return this.school;
}
}

module.exports = Intern;