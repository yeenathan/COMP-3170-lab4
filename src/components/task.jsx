export default function Task(props) {
    function handleInput(e) {
        // e.preventDefault();
        props.handleStatus(props.task);
    }
    
    return(
        <div className="task">
            <div>
                <input onClick={handleInput} type="checkbox"></input>
                <label style={props.task.status===0? null : {textDecorationLine: "line-through"}}>{props.task.name}</label>
            </div>
            <button onClick={props.del}>Remove task</button>
        </div>
    )
}