import "../css/MainMenu.css";

function MainMenu({ setContent }) {
    const onContentClick = (content) => {
        setContent(content);
    };

    return (
        <div className="menu">
            <li onClick={() => onContentClick("AsyncAwait")}>Async/Await</li>
            <span className="menuDivider">|</span>
            <li onClick={() => onContentClick("Classes")}>Classes</li>
            <span className="menuDivider">|</span>
            <li onClick={() => onContentClick("Context")}>Context</li>
            <span className="menuDivider">|</span>
            <li onClick={() => onContentClick("Hoisting")}>Hoisting</li>
            <span className="menuDivider">|</span>
            <li onClick={() => onContentClick("Promises")}>Promises</li>
            <span className="menuDivider">|</span>
            <li onClick={() => onContentClick("Prototypes")}>Prototypes</li>
        </div>
    );
}

export default MainMenu;
