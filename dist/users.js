"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.User = void 0;
class User {
    constructor(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    matches(another) {
        return another !== undefined &&
            this.email === another.email &&
            this.password === another.password;
    }
}
exports.User = User;
exports.users = {
    "xxx@gmail.com": new User('xxx@gmail.com', "xxx", "xxx123"),
    "aaa@gmail.com": new User('aaa@gmail.com', "aaa", "aaa123")
};
