import { useSelector } from 'react-redux';

import SingleTodo from './SingleTodo';
import Spinner from './Spinner';

const ListTodo = () => {

    
    const {loading, error} = useSelector(state => state.todos);
    //console.log(loading);
    //console.log(error);
    //console.log(todos);

    return (
        

        <div className='container d-flex justify-content-center m-5'>
            {loading === true && <Spinner />}  
            {error === true && <h2>Something went wrong: {error} </h2>}
            <ul className='list-group'>
                <SingleTodo />
            </ul>
        </div>
    );
};

export default ListTodo;