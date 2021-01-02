import "../App.css";
import CodeBlock from "./CodeBlock";
import "../css/Context.css";

function Context() {
    return (
        <div className="mainContent">
            <h1>Context</h1>
            <hr />
            <h3>
                Context and "This" are one in the same.
                <br />
                Context is always the value of the this keyword which is a
                reference to the object that “owns” the currently executing code
                or the function where it’s looked at.
            </h3>
            <h2>“this” Refers to a Global Object by default.</h2>
            <CodeBlock
                code={{
                    __html: `function foo () {<br>console.log("Simple function call");<br>console.log(this === window); <br>}<br><br>foo();	//prints true on console<br>console.log(this === window) //Prints true on console.`
                }}
            />
            <hr />
            <h2>Strict Mode</h2>
            <h3>
                If strict mode is enabled for any function, then the value of
                this will be marked as undefined as in strict mode. The global
                object refers to undefined in place of the windows object.
            </h3>
            <CodeBlock
                code={{
                    __html: `function foo () {<br>'use strict';<br>console.log("Simple function call")<br>console.log(this === window); <br>}<br><br>foo();	//prints false on console as in “strict mode” value of “this” in global execution context is undefined.`
                }}
            />
            <hr />
            <h2>Arrow Functions</h2>
            <h3>
                Arrow functions work differently from regular functions in terms
                of context. This will always refer to the lexical scope, i.e
                thisretains the value of the enclosing lexical context's.
            </h3>
            <CodeBlock
                code={{
                    __html: `const a = () => {<br>return this;<br>}<br>undefined`
                }}
            />
            <CodeBlock
                code={{
                    __html: `a() === window <br> true`
                }}
            />
            <hr />
            <h2>Execution Context</h2>
            <h3>
                Execution context is the ‘environment’ or scope in which a
                function executes in. Every time a function is called, a new
                execution context is created.
                <br />
                Every call to an execution context has 2 stages
                <br />
                <br />
                Creation — when the function is called
                <br />
                <br />
                Activation — when the function is executed
                <br />
                <br />
                The value of thisis determined at creation phase, not at the
                time of execution. However, thisdetermination rule remains the
                same.
            </h3>
            <div className="linkContainer" target="_blank">
                <a
                    href="https://towardsdatascience.com/javascript-context-this-keyword-9a78a19d5786"
                    target="_blank"
                    rel="noreferrer">
                    Reference #1 (Towards Data Science)
                </a>
                <a
                    href="https://medium.com/better-programming/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8"
                    target="_blank"
                    rel="noreferrer">
                    Reference #2 (Medium Tutorial)
                </a>
            </div>
        </div>
    );
}

export default Context;
