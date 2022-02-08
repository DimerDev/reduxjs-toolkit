import { useSelector } from 'react-redux';

import SingleTodo from './SingleTodo';
import Spinner from './Spinner';

const ListTodo = () => {

    const todos = useSelector(state=> state.todos.list);
    const {loading, error} = useSelector(state => state.todos);
    //console.log(loading);
    //console.log(error);
    //console.log(todos);

    return (
        

        <div className='container d-flex justify-content-center'>
        {loading === true && <Spinner />}  
        {error === true && <h2>Something went wrong: {error} </h2>}
          <ul className='list-group'>
              
          </ul>
        </div>
    );
};

export default ListTodo;