import { useSelector, useDispatch } from "react-redux";
import { fetchDeleteTodo, fetchToggleCompleteTodo } from "../store/todoSlice";

const SingleTodo = () => {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.list);

    const handlerChange = (id) => {
        dispatch(fetchToggleCompleteTodo(id));
    };

    const handlerDel = (id) => {
        dispatch(fetchDeleteTodo(id));
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