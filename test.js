class Square {
    constructor(width) {
        this.width = width;
        this.height = width;
    }

    static equals(a, b) {
        return a.width * a.height == b.height * b.width;
    }
}

let square1 = new Square(8);
let square2 = new Square(9);
console.log(Square.equals(square1, square2)); //false
