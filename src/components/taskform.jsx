export default function TaskForm(props) {
    function handleAdd(e) {
        e.preventDefault();
        e.target[0].value = "";
        props.handleAdd();
    }
    
    return(
        <form className="taskform" onSubmit={handleAdd}>
            <input onChange={props.handleAddInput} type="text" placeholder="Add task..."></input>
            <input type="submit" value="Add Task"/>
        </form>
    )
}