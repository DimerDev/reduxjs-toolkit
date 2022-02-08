
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodo } from './store/todoSlice';
import ListTodo from './components/ListTodo';


function App() {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTodo());
  	}, [dispatch]);

	const handlerSubmit = (event) => {
		event.preventDefault();
		const text = event.target.text.value.trim();
		
	};
	
	return (
		<div className='container d-flex justify-content-center my-4'>
			<div className='row'>
				
					<form className='form-inline my-2' onSubmit={handlerSubmit}>
						<div className='form-group d-flex justify-content-center'>
							<input type='text' className='w-75' name='text' ></input>
							<button type="submit" className="btn btn-primary mx-2">Add task</button>
						</div>
					</form>
			
					<ListTodo />
			
			</div>
		</div>
	);
}

export default App;
