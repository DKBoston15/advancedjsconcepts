import "../css/MainMenu.css";

function MainMenu({ setContent }) {
    const onContentClick = (content) => {
        setContent(content);
    };

    return (
        <div className="menu">
            <li onClick={() => onContentClick("Async")}>Async</li>
            <li onClick={() => onContentClick("Classes")}>Classes</li>
            <li onClick={() => onContentClick("Context")}>Context</li>
            <li onClick={() => onContentClick("Functions")}>Functions</li>
            <li onClick={() => onContentClick("Hoisting")}>Hoisting</li>
            <li onClick={() => onContentClick("Promises")}>Promises</li>
            <li onClick={() => onContentClick("Prototypes")}>Prototypes</li>
        </div>
    );
}

export default MainMenu;
