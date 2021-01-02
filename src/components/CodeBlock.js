import "../css/CodeBlock.css";

function CodeBlock(props) {
    return (
        <div className="codeBlock">
            <p className="code" dangerouslySetInnerHTML={props.code}></p>
        </div>
    );
}
export default CodeBlock;
