export class User {
    constructor(
        public email : string,
        public name : string,
        private password : string
    ){}

    matches(another : User) : boolean {
        return another !== undefined && 
        this.email === another.email && 
        this.password === another.password 
    }
}

export const users : {[key: string] : User} = {
    "xxx@gmail.com" : new User('xxx@gmail.com', "xxx", "xxx123"),
    "aaa@gmail.com" : new User('aaa@gmail.com', "aaa", "aaa123")
}