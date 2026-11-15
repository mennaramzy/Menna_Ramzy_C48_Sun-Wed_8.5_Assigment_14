"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email, password, phone, age) {
        this.notebooks = [];
        if (age < 18 || age > 60) {
            throw new Error("Age must be between 18 and 60");
        }
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
    }
    displayInfo() {
        console.log(`User Info [ID: ${this.id}]: Name: ${this.name}, Email: ${this.email}, Age: ${this.age}, Phone: ${this.phone}`);
    }
    addNotebook(notebook) {
        this.notebooks.push(notebook);
    }
    getId() {
        return this.id;
    }
}
exports.User = User;
