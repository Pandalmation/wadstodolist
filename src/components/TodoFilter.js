import "./Filter.css"

let TodoFilter = (props) => {
    function onFilterValueChanged(event){
        props.filterValueSelected(event.target.value)

    }
    return(<div className= "filter-area">
        <select name = "isUncompleted" onChange={onFilterValueChanged}>
            <option value="all">All</option>
            <option value="uncompleted">Uncompleted</option>
            <option value="completed">Completed</option>
        </select>
    </div>)
}

export default TodoFilter