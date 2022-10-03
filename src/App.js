import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import About from './components/About';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'; // useEffect is working as http send request doGET or POST

function App() {
	// Hide form by default passing true or false
	const [showAddTask, setShowAddTask] = useState(false); // { showAddTask && } short for if true do thi else default applied this to AddTask component

	const [tasks, setTasks] = useState([
		{
			text: 'Shopping',
			day: 'Today',
			reminder: true,
			id: 1,
		},
		{
			text: 'Doctor Appointment',
			day: 'Wed',
			reminder: false,
			id: 3,
		},
		{
			text: 'Another Meeting',
			day: 'SUNDAY',
			reminder: false,
			id: 4,
		},
	]);
	// Add Task
	const addTask = (task) => {
		// Generate random id              // Only in UI without json server
		const id = Math.floor(Math.random() * 10000) + 1;
		// pass id in new task
		const newTask = { id, ...task };
		setTasks([...tasks, newTask]);
	};

	// Delete Task
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
		console.log(id);
	};

	// Toggle Reminder
	const toggleReminder = (id) => {
		console.log(id);
		setTasks(
			tasks.map((task) =>
				task.id === id
					? // i want a copy or sperad across all of the task values i want to change the reminder
					  { ...task, reminder: !task.reminder }
					: task
			)
		);
	};

	return (
		<BrowserRouter>
			<div className="container">
				<Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />



			


				{showAddTask && <AddTask onAdd={addTask} />}
								{tasks.length > 0 ? (
									<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
								) : (
									'No Tasks to show'
								)}



				<Routes>
					<Route
						path="/"
						exact
						element={
							<>
						
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
