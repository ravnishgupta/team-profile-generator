const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email,school) {
        if (typeof name !== 'string' || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }
        
        if (typeof id !== 'string' || !id.trim().length) {
            throw new Error("Expected parameter 'ID' to be a not blank");
        }

        if (typeof email !== 'string' || !email.trim().length) {
            throw new Error("Invalid email");
        }

        if (typeof school !== 'string' || !school.trim().length) {
            throw new Error("Invalid school info");
        }

        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

}
module.exports = Intern