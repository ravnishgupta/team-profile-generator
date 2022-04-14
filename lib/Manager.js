const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {

        if (typeof name !== 'string' || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }
        
        if (typeof id !== 'string' || !id.trim().length) {
            throw new Error("Expected parameter 'ID' to be a not blank");
        }

        if (typeof email !== 'string' || !email.trim().length) {
            throw new Error("Invalid email");
        }

        if (typeof officeNumber !== 'string' || !officeNumber.trim().length) {
            throw new Error("Invalid office number");
        }

        super(name, id, email);
        this.officeNumber = officeNumber
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager