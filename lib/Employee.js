class Employee {
    
    constructor(name, id, email) {
        if (typeof name !== 'string' || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }
        
        if (typeof id !== 'string' || !id.trim().length) {
            throw new Error("Expected parameter 'ID' to be a not blank");
        }

        if (typeof email !== 'string' || !email.trim().length) {
            throw new Error("Invalid email");
        }
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return this.constructor.name;
    }
}

module.exports = Employee