import "../App.css";
import CodeBlock from "./CodeBlock";

function Prototypes() {
    return (
        <div className="mainContent">
            <h1>Prototypes</h1>
            <h2>
                In Javascript, prototypes are a mechanism by which objects can
                inherit or share features from one another. When creating a
                class or object, you can define a function in the constructor
                that will be available on newly created instances. With
                prototypes, rather than defining the function on the
                constructor, you define it on the class or object itself, rather
                than tied to a specific instance of that class or object. This
                provides better performance and allows you to have a global
                function that can change and that change will be respected
                across all existing instances of that class or object.
            </h2>
            <h3>Take this object constructor below:</h3>
            <CodeBlock
                code={{
                    __html: `function Dog(name, color, age) {<br>&nbsp&nbsp    this.name = name;<br>&nbsp&nbsp    this.color = color;<br>&nbsp&nbsp    this.age = age;<br>}<br>`
                }}
            />
            <h3>Now let's add a new method using the prototype object:</h3>
            <CodeBlock
                code={{
                    __html: `Dog.prototype.bark = function () {<br>&nbsp&nbsp    this.bark = true;<br>&nbsp&nbsp    console.log('I am + this.name');<br>};<br><br>let dog1 = new Dog("Koa", "Tri-Color", "6 weeks");<br>dog1.bark();`
                }}
            />
            <div className="linkContainer" target="_blank">
                <a
                    href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes"
                    target="_blank"
                    rel="noreferrer">
                    Reference #1 (MDN Web Docs)
                </a>
            </div>
        </div>
    );
}

export default Prototypes;
