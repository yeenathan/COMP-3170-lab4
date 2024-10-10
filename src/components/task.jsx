export default function Task(props) {
    return(
        <div className="task">
            <div>
                <input onClick={() => props.handleStatus(props.task)} type="checkbox"></input>
                <label style={props.task.status===0? null : {textDecorationLine: "line-through"}}>{props.task.name}</label>
            </div>
            <button onClick={props.del}>Remove task</button>
        </div>
    )
}