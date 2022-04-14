const Employee = require("./Employee");

class Engineer extends Employee {

    constructor (name, id, email, github) {

        if (typeof name !== 'string' || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }
        
        if (typeof id !== 'number') {
            throw new Error("Expected parameter 'ID' to be a not blank");
        }

        if (typeof email !== 'string' || !email.trim().length) {
            throw new Error("Invalid email");
        }

        if (typeof github !== 'string' || !github.trim().length) {
            throw new Error("Invalid github account");
        }


        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

}

module.exports = Engineer
