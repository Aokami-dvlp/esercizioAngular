import { Object } from './Esercizio1'

class User implements Object {

    name: string;
    surname: string;

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }

    fullName() {
        console.log(`${this.name} ${this.surname}`);         
    }
} 

let user: User = new User('Emanuele', 'David',);
user.fullName();