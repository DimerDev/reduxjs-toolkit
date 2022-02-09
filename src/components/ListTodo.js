import { useSelector } from 'react-redux';

import SingleTodo from './SingleTodo';
import Spinner from './Spinner';

const ListTodo = () => {

    
    const {loading, error} = useSelector(state => state.todos);
    //console.log(loading);
    //console.log(error);

    return (
        

        <div className='container'>
            {loading  && <Spinner />}  
            {error && <h2>Something went wrong: {error} </h2>}
            <ul className='list-group'>
                <SingleTodo />
            </ul>
        </div>
    );
};

export default ListTodo;