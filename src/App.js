import "./App.css";
import Welcome from "./components/hello";
import MaterialUI from "./components/materialui";

function App() {
    return (
        <div className="App">
            <Welcome name="Dakota" />
            <MaterialUI />
        </div>
    );
}

export default App;
