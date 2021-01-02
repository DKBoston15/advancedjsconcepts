import "../App.css";
import CodeBlock from "./CodeBlock";

function Classes() {
    return (
        <div className="mainContent">
            <h1>Classes</h1>
            <h3>
                Classes are a template for creating objects. They encapsulate
                data with code to work on that data.
            </h3>
            <hr />
            <h2>Class Declaration</h2>
            <h3>
                One way to define a class is using a class declaration. To
                declare a class, you use the class keyword with the name of the
                class ("Rectangle" here).
            </h3>
            <CodeBlock
                code={{
                    __html: `class Rectangle {<br>&nbsp&nbsp&nbsp&nbspconstructor(height, width) {<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspthis.height = height;<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspthis.width = width;<br>}}`
                }}
            />
            <hr />
            <h2>Class Expressions</h2>
            <h3>
                A class expression is another way to define a class. Class
                expressions can be named or unnamed. The name given to a named
                class expression is local to the class's body. (it can be
                retrieved through the class's (not an instance's) name property,
                though).
            </h3>
            <CodeBlock
                code={{
                    __html: `// unnamed<br>let Rectangle = class {<br> &nbsp&nbsp constructor(height, width) {<br> &nbsp&nbsp&nbsp&nbsp   this.height = height;<br> &nbsp&nbsp&nbsp&nbsp   this.width = width;<br> &nbsp&nbsp }<br>};<br>console.log(Rectangle.name);<br>// output: "Rectangle"<br><br>// named<br>let Rectangle = class Rectangle2 {<br>&nbsp&nbsp  constructor(height, width) {<br> &nbsp&nbsp&nbsp&nbsp   this.height = height;<br> &nbsp&nbsp&nbsp&nbsp   this.width = width;<br> &nbsp&nbsp }<br>};<br>console.log(Rectangle.name);<br>// output: "Rectangle2"`
                }}
            />
            <hr />
            <h2>Example</h2>
            <CodeBlock
                code={{
                    __html: `class Person {<br> &nbsp&nbsp   constructor(fn, ln, height) {<br> &nbsp&nbsp&nbsp&nbsp       this.fn = fn;<br> &nbsp&nbsp&nbsp&nbsp       this.ln = ln;<br> &nbsp&nbsp&nbsp&nbsp       this.height = height; //feet<br> &nbsp&nbsp   }<br> &nbsp&nbsp   get heightInInches() {<br> &nbsp&nbsp&nbsp&nbsp       return this.height * 12;<br> &nbsp&nbsp   }<br> &nbsp&nbsp   speak() {<br> &nbsp&nbsp&nbsp&nbsp       return this;<br> &nbsp&nbsp   }<br>}<br><br>const person1 = new Person("George", "The Giant", 10);<br><br>console.log(person1.heightInInches); //120<br>console.log(person1); //Person { fn: 'George', ln: 'The Giant', height: 10 }`
                }}
            />
            <hr />
            <h2>Extending a Class/Class Inheritance</h2>
            <h3>
                Expanding on the example above, let's extend our Person class to
                add a method to get the person's height in yards.
            </h3>
            <CodeBlock
                code={{
                    __html: `class Person {<br> &nbsp&nbsp   constructor(fn, ln, height) {<br> &nbsp&nbsp&nbsp&nbsp       this.fn = fn;<br> &nbsp&nbsp&nbsp&nbsp       this.ln = ln;<br> &nbsp&nbsp&nbsp&nbsp       this.height = height; //feet<br> &nbsp&nbsp   }<br> &nbsp&nbsp   get heightInInches() {<br> &nbsp&nbsp&nbsp&nbsp       return this.height * 12;<br> &nbsp&nbsp   }<br> &nbsp&nbsp   speak() {<br> &nbsp&nbsp&nbsp&nbsp       return this;<br> &nbsp&nbsp   }<br>}<br><br>class betterPerson extends Person {<br> &nbsp &nbsp    get heightInYards() {<br> &nbsp &nbsp &nbsp &nbsp        return this.height * 3;<br> &nbsp &nbsp    }<br>}<br><br>const person1 = new Person("George", "The Giant", 10);<br>const person2 = new betterPerson("Alan", "The Ant", 0.01);<br><br>console.log(person1.heightInInches); //120 <br>console.log(person1); //Person { fn: 'George', ln: 'The Giant', height: 10 }<br>console.log(person1.heightInYards); //undefined<br><br>console.log(person2.heightInYards); //0.03`
                }}
            />
            <hr />
            <h2>Super</h2>
            <h3>
                The super keyword refers to the parent class. It is used to call
                the constructor of the parent class and to access the parent's
                properties and methods.
            </h3>
            <CodeBlock
                code={{
                    __html: `class Person {<br>&nbsp &nbsp   constructor(fn, ln) {<br> &nbsp &nbsp &nbsp &nbsp        this.fn = fn;<br> &nbsp &nbsp &nbsp &nbsp        this.ln = ln;<br>  &nbsp &nbsp   }<br>  &nbsp &nbsp   get name() {<br>  &nbsp &nbsp &nbsp &nbsp       return this.fn + " " + this.ln;<br>   &nbsp &nbsp  }<br>}`
                }}
            />
            <CodeBlock
                code={{
                    __html: `class Backpack extends Person {<br>&nbsp&nbsp    constructor(fn, ln, contents) {<br>&nbsp&nbsp&nbsp&nbsp        super(fn, ln);<br>&nbsp&nbsp&nbsp&nbsp        this.contents = contents;<br>&nbsp&nbsp&nbsp&nbsp        this.fn = this.name;<br>&nbsp&nbsp    }<br>}<br><br>const person1 = new Backpack("George", "The Giant", ["Broccoli", "Notebook"]);<br>console.log(person1);<br><br>// Backpack {<br>&nbsp&nbsp  fn: 'George The Giant',<br>&nbsp&nbsp  ln: 'The Giant',<br>&nbsp&nbsp  contents: [ 'Broccoli', 'Notebook' ]<br>}`
                }}
            />
            <hr />
            <h2>Static Methods</h2>
            <h3>
                The static keyword provide access to methods and variables that
                do not require a new instance of the class. The methods and
                variables are accessed directly by calling on the class itself.
            </h3>
            <CodeBlock
                code={{
                    __html: `class Square {<br>&nbsp&nbsp    constructor(width) {<br>&nbsp&nbsp&nbsp&nbsp        this.width = width;<br>&nbsp&nbsp&nbsp&nbsp       this.height = width;<br> &nbsp&nbsp   }<br><br>&nbsp&nbsp    static equals(a, b) {<br> &nbsp&nbsp&nbsp&nbsp       return a.width * a.height == b.height * b.width;<br>&nbsp&nbsp    }<br>}<br><br>let square1 = new Square(8);<br>let square2 = new Square(9);<br>console.log(Square.equals(square1, square2)); //false`
                }}
            />
            <div className="linkContainer" target="_blank">
                <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes"
                    target="_blank"
                    rel="noreferrer">
                    Reference #1 (MDN Web Docs)
                </a>
                <a
                    href="https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript"
                    target="_blank"
                    rel="noreferrer">
                    Reference #2 (Digital Ocean)
                </a>
                <a
                    href="https://www.youtube.com/watch?v=CwAU1wYeHiM"
                    target="_blank"
                    rel="noreferrer">
                    Reference #3 (Youtube)
                </a>
            </div>
        </div>
    );
}

export default Classes;
