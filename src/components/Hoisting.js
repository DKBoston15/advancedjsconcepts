import "../App.css";
import CodeBlock from "./CodeBlock";
import "../css/Hoisting.css";

function Hoisting() {
    return (
        <div className="mainContent">
            <h1>Variable Hoisting</h1>
            <hr />
            <h3>
                A JavaScript mechanism where variables and function declarations
                are moved to the top of their scope before code execution.
            </h3>
            <ul>
                <li>
                    - Regardless of where functions and variables are declared,
                    they will be moved to the top of their scope. Global/Local
                    has no impact.
                </li>
                <br />
                <li>
                    - Variable declarations are processed before any code is
                    executed.
                </li>
                <br />
                <li>
                    - All undeclared variables are global variables as
                    undeclared variables do not exist until code assigning them
                    is executed.
                </li>
            </ul>
            <div className="codeBlockContainer">
                <p>
                    Take the code below again, noticing that this prints
                    undefined.
                </p>
                <CodeBlock
                    code={{
                        __html:
                            "console.log(counter) // undefined;<br>var counter = 1;"
                    }}
                />
                <p>
                    The reason this prints undefined is because Javascript moves
                    the variable declaration to the top of the scope. <br />
                    The above code is essentialy the same as the code below.
                </p>
                <CodeBlock
                    code={{
                        __html:
                            "var counter;<br><br>console.log(counter); // undefined <br>counter = 1;"
                    }}
                />
                <hr />
                <h1>Function Hoisting</h1>
                <p>
                    Similar to variables, the JavaScript engine also hoists the
                    function declarations. It moves the function declarations to
                    the top of the script. <br />
                    The left block of code is equivelant to the right block of
                    code.
                </p>
                <div className="functionContainer">
                    <CodeBlock
                        code={{
                            __html:
                                "let x = 20,<br>y = 10;<br><br>let result = add(x,y);<br>console.log(result);<br><br>function add(a, b){<br>return a + b;}"
                        }}
                    />
                    <CodeBlock
                        code={{
                            __html:
                                "function add(a, b){ <br>return a + b;<br>}<br><br>let x = 20,<br>y = 10;<br><br>let result = add(x,y);<br>console.log(result);"
                        }}
                    />
                </div>
            </div>
            <hr />
            <h1>TL:DR</h1>
            <ul>
                <li>
                    - JavaScript hoisting occurs during the creation phase of
                    the execution context that moves the variable and function
                    declarations to the top of the script.
                </li>
                <br />
                <li>
                    - The JavaScript engine hoists the variables declared using
                    the let keyword, but it doesn’t initialize them as the
                    variables declared with the var keyword.
                </li>
                <br />
                <li>
                    - Function expressions and arrow functions aren’t hoisted.
                </li>
            </ul>
            <div className="linkContainer" target="_blank">
                <a
                    href="https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript"
                    target="_blank"
                    rel="noreferrer">
                    Reference #1 (Digital Ocean)
                </a>
                <a
                    href="https://www.javascripttutorial.net/javascript-hoisting/"
                    target="_blank"
                    rel="noreferrer">
                    Reference #2 (Javascript Tutorial)
                </a>
            </div>
        </div>
    );
}

export default Hoisting;
