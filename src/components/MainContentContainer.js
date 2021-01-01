import Async from "./Async";
import Classes from "./Classes";
import Context from "./Context";
import Functions from "./Functions";
import Hoisting from "./Hoisting";
import Promises from "./Promises";
import Prototypes from "./Prototypes";
function MainContentContainer(props) {
    switch (props.content) {
        case "Async":
            return <Async />;
        case "Classes":
            return <Classes />;
        case "Context":
            return <Context />;
        case "Functions":
            return <Functions />;
        case "Hoisting":
            return <Hoisting />;
        case "Promises":
            return <Promises />;
        case "Prototypes":
            return <Prototypes />;
        default:
            return;
    }
}

export default MainContentContainer;
