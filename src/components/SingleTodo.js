import { useSelector } from "react-redux";

const SingleTodo = () => {
    const todos = useSelector(state => state.todos.list);
    //console.log(todos);

    const handlerChange = (id) => {
        console.log(id);
    };
    const handlerDel = (id) => {
        console.log(id);
    };

    return(
        <>
            {todos.map( todo =>
            <li key={todo.id}
                className='list-group-item list-group-item-action d-flex justify-content-between align-items-center text-center'>
                <input type="checkbox" className="mx-2" defaultChecked={todo.completed} onChange={() => handlerChange(todo.id)}/>
                {todo.completed ? <s>{todo.title}</s> : todo.title }
                <button className='btn btn-close btn-sm' onClick={() => handlerDel(todo.id)}></button>
            </li>
            )}
        </>
    )
};

export default SingleTodo;