import "../App.css";
import CodeBlock from "./CodeBlock";

function AsyncAwait() {
    return (
        <div className="mainContent">
            <h1>Async/Await</h1>
            <h2>
                Async/Await is essentially santatical sugar for making promises
                easier to work with!
            </h2>
            <h3>
                Take the two functions below that make requests using promises.
            </h3>
            <CodeBlock
                code={{
                    __html: `function makeRequest(location) {<br>&nbsp&nbsp    return new Promise((resolve, reject) => {<br>&nbsp&nbsp&nbsp&nbsp        console.log('Making request to'+location);<br>&nbsp&nbsp        if (location == "Google") {<br>&nbsp&nbsp&nbsp&nbsp           resolve("Google says hi!");<br>&nbsp&nbsp       } else {<br>&nbsp&nbsp&nbsp&nbsp            reject("We can only talk to Google.");<br>&nbsp&nbsp       }<br>&nbsp&nbsp    });<br>}`
                }}
            />
            <CodeBlock
                code={{
                    __html: `function processRequest(response) {<br>&nbsp&nbsp    return new Promise((resolve, reject) => {<br>&nbsp&nbsp&nbsp&nbsp        console.log("Processing Request");<br>&nbsp&nbsp&nbsp&nbsp        resolve('Extra Information:'+response);<br>&nbsp&nbsp    });<br>}`
                }}
            />
            <h3>
                Below is what the call looks like to utilize the above two
                functions using promises.
            </h3>
            <CodeBlock
                code={{
                    __html: `makeRequest("Facebook")<br>&nbsp&nbsp    .then((res) => {<br>&nbsp&nbsp&nbsp&nbsp        console.log("Response Recieved");<br>&nbsp&nbsp&nbsp&nbsp        return processRequest(res);<br>&nbsp&nbsp    })<br>&nbsp&nbsp    .then((processedRequest) => {<br>&nbsp&nbsp&nbsp&nbsp       console.log(processedRequest);<br>&nbsp&nbsp    })<br>&nbsp&nbsp    .catch((err) => {<br>&nbsp&nbsp&nbsp&nbsp        console.log(err);<br>&nbsp&nbsp    });<br>`
                }}
            />
            <h3>
                The code below does the same thing as the code above, but using
                async await. By using Async/Await, javascript waits (hint await)
                for the promise to finish before moving on to the next part of
                the async function.
            </h3>
            <h3>
                Important to note that await requests have to be wrapped in an
                async function so Javascript knows how to handle the code. When
                Javascript hits the await code, it will wait for the promise to
                finish, and while waiting will continue excuting the code
                outside of the async function.
            </h3>
            <CodeBlock
                code={{
                    __html: `async function doWork() {<br>&nbsp&nbsp    try {<br>&nbsp&nbsp&nbsp&nbsp        const response = await makeRequest("Google");<br>&nbsp&nbsp&nbsp&nbsp        console.log("Response Received");<br>&nbsp&nbsp&nbsp&nbsp        const processedResponse = await processRequest(response);<br>&nbsp&nbsp&nbsp&nbsp        console.log(processedResponse);<br>&nbsp&nbsp    } catch {<br>&nbsp&nbsp&nbsp&nbsp        console.log("Error");<br>&nbsp&nbsp    }<br>}<br>doWork();`
                }}
            />
            <h1>Advantages to Async/Await</h1>
            <ul>
                <li>- More concise and clear</li>
                <br />
                <li>
                    - Error Handling: By using try/catch blocks, we are able to
                    catch both synchronous and asynchronous errors with the same
                    method (try/catch blocks).
                </li>
                <br />
                <li>
                    - Intermediate values: If you have two promises and need to
                    pass the result of both of those into a third promise, you
                    end up with a deeply nested code block. With Async/Await, it
                    is much more readable.
                </li>
                <br />
                <li>
                    - Error Stacks: With chains of promises, tracking down an
                    error can be incredibly difficult ( // Error: oops at
                    callAPromise.then.then.then.then.then (index.js:8:13). With
                    Async/Await, it is much easier to track errors.
                </li>
            </ul>

            <div className="linkContainer" target="_blank">
                <a
                    href="https://www.youtube.com/watch?v=V_Kr9OSfDeU"
                    target="_blank"
                    rel="noreferrer">
                    Reference #1 (Webdev Simplified)
                </a>
            </div>
        </div>
    );
}

export default AsyncAwait;
