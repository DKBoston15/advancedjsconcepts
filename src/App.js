import React, { useState } from "react";
import "./App.css";
import MainMenu from "./components/MainMenu";
import MainContentContainer from "./components/MainContentContainer";

function App() {
    const [content, setContent] = useState("Async");
    return (
        <div className="App">
            <h1 className="header">Advanced JS Concepts</h1>
            <MainMenu setContent={setContent} />
            <MainContentContainer content={content} />
        </div>
    );
}

export default App;
