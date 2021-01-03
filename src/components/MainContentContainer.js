import AsyncAwait from "./AsyncAwait";
import Classes from "./Classes";
import Context from "./Context";
import Hoisting from "./Hoisting";
import Promises from "./Promises";
import Prototypes from "./Prototypes";
function MainContentContainer(props) {
    switch (props.content) {
        case "AsyncAwait":
            return <AsyncAwait />;
        case "Classes":
            return <Classes />;
        case "Context":
            return <Context />;
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
