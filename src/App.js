import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import About from './components/About';
import Footer from './components/Footer';
import { useState, useEffect } from 'react'; // useEffect is working as http send request doGET or POST
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		// UseEffect that will run on every render.

		fetchTasks();

		const getTasks = async () => {
			// Read all from db.json file then fetch tasks
			const tastsFromServer = await fetchTasks();

			setTasks(tastsFromServer);
		};
		getTasks();
	}, []); // passin just an empty array for now this is for when any changes happens

	// Fetch tasks
	const fetchTasks = async () => {
		const res = await fetch('http://localhost:5000/tasks');
		const data = await res.json(); // Once resolve  get data object

		return data;
	};

	// Fetch task for an update
	const fetchTask = async (id) => {
		const res = await fetch(`http://localhost:5000/tasks/${id}`);
		const data = await res.json(); // Once resolve  get data object

		return data;
	};

	// Add Task
	// Hide form by default
	const [showAddTask, setShowAddTask] = useState(false); // { showAddTask && } short for if true do thi else default applied this to AddTask component

	const addTask = async (task) => {
		const res = await fetch('http://localhost:5000/tasks', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(task),
		});

		const data = await res.json(); // get the data via http in json format
		setTasks([...tasks, data]); // useing spread operater to add new task to an existing data.

		// Generate random id              // Only in UI without json server
		// const id = Math.floor(Math.random() * 10000) + 1;
		// // pass id in new task
		// const newTask = { id, ...task };
		// setTasks([...tasks, newTask]);
	};

	// Delete  task

	const deleteTask = async (id) => {
		await fetch(`http://localhost:5000/tasks/${id}`, {
			method: 'DELETE',
		});

		setTasks(tasks.filter((task) => task.id !== id));
	};
	// Toggle Reminder on double click it will turn green as on then double click it should show no color which means off.

	const toggleReminder = async (id) => {
		const taskToToggle = await fetchTask(id);
		const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
		const res = await fetch(`http://localhost:5000/tasks/${id}`, {
			method: 'PUT',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(updTask),
		});
		const data = await res.json();

		setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: data.reminder } : task)));
	};

	return (
		<BrowserRouter>
			<div className="container">
				{/* When onAdd prop is fired we will take that setShowAddTask and set it to opposite whatever the value is by calling showAddTask which is bolean */}
				<Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />

				{/* Using route to making the main home page separate from other 
components this step should be done 
at the very begining of the project  */}
				<Routes>
					<Route
						path="/"
						element={
							<>
								{showAddTask && <AddTask onAdd={addTask} />}
								{tasks.length > 0 ? (
									<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
								) : (
									'No Tasks To Show'
								)}
							</>
						}
					/>
					<Route path="/about" element={<About />} />
				</Routes>

				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
