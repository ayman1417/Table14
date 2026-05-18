export class User {
    constructor(name , email , password , team ) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    sayHello() {
        console.log(`Hello, ${this.name}`);
        console.log(`Your email is: ${this.email}`);
        console.log(`Your password is: ${this.password}`);
    }
}

