import React, { useState } from "react";
import "./App.css";
import MainMenu from "./components/MainMenu";
import { withStyles } from "@material-ui/core/styles";
import MainContentContainer from "./components/MainContentContainer";
import Switch from "@material-ui/core/Switch";

function App() {
    const [content, setContent] = useState("AsyncAwait");
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        console.log(state);
        if (state.checkedA === true) {
            //lightmode
            document.documentElement.style.setProperty("--main", "#131313");
            document.documentElement.style.setProperty(
                "--secondary",
                "#2196f3"
            );
            document.body.style.backgroundColor = "white";
        } else {
            document.documentElement.style.setProperty("--main", "white");
            document.documentElement.style.setProperty("--secondary", "orange");
            document.body.style.backgroundColor = "#131313";
        }
    };

    const PurpleSwitch = withStyles({
        switchBase: {
            color: "#2196f3",
            "&$checked": {
                color: "orange"
            },
            "& + $track": {
                backgroundColor: "#2196f3"
            },
            "&$checked + $track": {
                backgroundColor: "orange"
            }
        },
        checked: {},
        track: {}
    })(Switch);

    return (
        <div className="App">
            <h1 className="header">Advanced JS Concepts</h1>
            <MainMenu setContent={setContent} />
            <MainContentContainer content={content} />
            <div className="footer">
                <PurpleSwitch
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                    className="themeSwitch"
                />
            </div>
        </div>
    );
}

export default App;
