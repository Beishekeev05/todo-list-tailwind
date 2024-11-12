import { useState } from "react";

// Интерфейс для задачи
interface Task {
	id: number;
	text: string;
}

const App: React.FC = () => {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [taskText, setTaskText] = useState<string>("");

	// Функция для добавления задачи
	const addTask = () => {
		if (taskText.trim()) {
			const newTask: Task = {
				id: Date.now(),
				text: taskText,
			};
			setTasks([...tasks, newTask]);
			setTaskText("");
		}
	};

	// Функция для удаления задачи по id
	const removeTask = (id: number) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	return (
		<div className="flex flex-col items-center min-h-screen bg-slate-300 md:bg-green-500 sm:bg-gray-600 w-full p-4">
			<h1 className="text-white font-mono text-2xl md:text-3xl mb-6">
				To-Do List
			</h1>

			<div className="flex w-full max-w-md">
				<input
					type="text"
					value={taskText}
					onChange={(e) => setTaskText(e.target.value)}
					placeholder="Add a new task"
					className="flex-grow p-2 rounded-l-md border border-gray-300 focus:outline-none focus:border-blue-500"
				/>
				<button
					onClick={addTask}
					className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
					Add
				</button>
			</div>

			<ul className="mt-6 w-full max-w-md space-y-2">
				{tasks.map((task) => (
					<li
						key={task.id}
						className="flex justify-between items-center bg-white p-4 rounded-md shadow-md">
						<span className="text-gray-800">{task.text}</span>
						<button
							onClick={() => removeTask(task.id)}
							className="text-red-500 hover:text-red-700">
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default App;
