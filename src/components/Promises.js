import "../App.css";
import CodeBlock from "./CodeBlock";
import "../css/Promises.css";
import Button from "@material-ui/core/Button";
import { useEffect, useState } from "react";

function Promises() {
    const [user, setUser] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        loadData();
    }, []);
    const loadData = () => {
        fetch("https://randomuser.me/api/")
            .then((res) => res.json())
            .then((json) => {
                console.log(json.results[0]);
                setUser(json.results[0]);
                setIsLoaded(true);
            });
    };

    if (isLoaded) {
        return (
            <div className="mainContent">
                <h1>Promises</h1>
                <h3>
                    A promise is a promise to do something. The promise can
                    either be completed and thus resolved, or failed and thus
                    rejected.
                </h3>
                <h2>Example Promise</h2>
                <h3>
                    A new promise has two paramters, resolve and reject. <br />
                    <br />
                    If the conditions are successful, then use resolve() and
                    pass in whatever the success data is into the parameter.
                    <br />
                    If unsuccessfull, use the reject() function and pass in the
                    failure data.
                </h3>
                <CodeBlock
                    code={{
                        __html: `let p = new Promise((resolve, reject) => {<br>&nbsp&nbsp    let a = 1 + 1;<br>&nbsp&nbsp    if (a == 2) {<br>&nbsp&nbsp&nbsp&nbsp            resolve("Success");<br>&nbsp&nbsp    } else {<br>&nbsp&nbsp&nbsp&nbsp            reject("Failed");<br>&nbsp&nbsp    }<br>});`
                    }}
                />
                <h3>
                    When calling a promise, you can use .then to capture the
                    success of a promise (the code within the then block will
                    not run until the promise is resolved). <br /> Use the
                    .catch block to perform actions when the promise is
                    rejected. <br /> Notice that .then blocks can be chained!
                    This is a welcome addition and solves all issues that arose
                    from nesting callbacks.
                </h3>
                <CodeBlock
                    code={{
                        __html: `p.then((message) => {<br>&nbsp&nbsp    console.log(message); //Success <br>}).catch((err) => {<br>&nbsp&nbsp    console.log(err); // Failure<br>}.then(() => {<br>console.log('Yes')}<br>));`
                    }}
                />
                <h1>Fetch Example</h1>
                <h3>
                    The popular Fetch library is used to make API requests and
                    is built using promsies.
                </h3>
                <div className="fetchExampleContainer">
                    <Button variant="contained" onClick={loadData}>
                        Make Fetch Call
                    </Button>
                    <div className="apiResultsContainer">
                        <ul className="apiList">
                            <li>
                                {user.name.first} {user.name.last}
                            </li>
                            <li>{user.email}</li>
                            <li>{user.cell}</li>
                            <hr />
                            <li>
                                {user.location.street.number}{" "}
                                {user.location.street.name}
                            </li>
                            <li>
                                {user.location.city} {user.location.postcode}
                            </li>
                        </ul>
                    </div>
                </div>
                <h1>TL:DR</h1>
                <h3>
                    Promises are great for actions that will take some time to
                    complete in the background, examples including uploading an
                    image or making a request to an API.
                    <br /> Promises are an awesome replacement for callbacks and
                    especially nested callbacks which are hard to read and make
                    sense of.
                </h3>
                <div className="linkContainer" target="_blank">
                    <a
                        href="https://www.youtube.com/watch?v=DHvZLI7Db8E"
                        target="_blank"
                        rel="noreferrer">
                        Reference #1 (Webdev Simplified)
                    </a>
                </div>
            </div>
        );
    } else {
        return (
            <div class="errorText">
                Loading... If stuck here, reload the page.
            </div>
        );
    }
}

export default Promises;
