//Try creating an object with a method. Apply a prototype to that object and use it.

function Dog(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
}
Dog.prototype.bark = function () {
    this.bark = true;
    console.log(`I am ${this.name}`);
};

let dog1 = new Dog("Koa", "Tri-Color", "6 weeks");
dog1.bark();
