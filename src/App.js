
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodo } from './store/todoSlice';
import ListTodo from './components/ListTodo';


function App() {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTodo());
  	}, [dispatch]);
	
	return (
		<div className='container'>
			<ListTodo />
		</div>
	);
}

export default App;
