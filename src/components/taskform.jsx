export default function TaskForm(props) {
    return(
        <form className="taskform" onSubmit={props.handleAdd}>
            <input onChange={props.handleAddInput} type="text" placeholder="Add task..."></input>
            <input type="submit" value="Add Task"/>
        </form>
    )
}