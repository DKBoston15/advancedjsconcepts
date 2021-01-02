class Person {
    constructor(fn, ln, height) {
        this.fn = fn;
        this.ln = ln;
        this.height = height; //feet
    }
    get heightInInches() {
        return this.height * 12;
    }
    speak() {
        return this;
    }
}

class betterPerson extends Person {
    get heightInYards() {
        return this.height * 3;
    }
}

const person1 = new Person("George", "The Giant", 10);
const person2 = new betterPerson("Alan", "The Ant", 0.01);

console.log(person1.heightInInches);
console.log(person1);
console.log(person1.heightInYards);

console.log(person2.heightInYards);
