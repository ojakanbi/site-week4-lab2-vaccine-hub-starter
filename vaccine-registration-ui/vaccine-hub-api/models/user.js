
class User { 
    constructor(id, name, email, password, role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    static async login(email, password) {
        // const userInfo  = await this.validateLogin(email, password);

        if (email === '' || password === '') {   // the '' will essentially be the email/password the user put when registering
            throw new ExpressError('Email and password required', 400);
        }
    }

    static async register(name, email, password) {
        // const userInfo = await this.validateRegister(name, email, password, role);
        if (email === '') {
            throw new ExpressError('Email already registered', 400);
        }
    }
}

module.exports = User;
// async function nameOfFunction() {
//     const result = await promise;
//     // code goes here
// }