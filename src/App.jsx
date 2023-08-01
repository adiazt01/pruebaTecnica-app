import { useState } from "react";
import "./App.css";
import { getTask } from "./services/getTasks";
import { Task } from "./components/Task";
import { InputPerson } from "./components/inputPerson";

function App() {
  const [storage, setStorage] = useState([]);
  const [personNumber, setPersonNumber] = useState(1);

  const onAddTask = async (e, id) => {
    e.preventDefault();
    getTask(id).then((data) => {
      if (!storage.includes(data.key)) {
        setStorage([
          ...storage,
          { activity: data.activity, done: false, id: data.key },
        ]);
      }
    });
  };

  const onDeleteTask = (id) => {
    setStorage(storage.filter((task) => task.id != id));
  };

  const onToggleTask = (id) => {
    const updatedStorage = storage.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setStorage(updatedStorage);
  };

  return (
    <main>
      <h1>To do App</h1>
      <InputPerson
        onAddTask={onAddTask}
        personNumber={personNumber}
        setPersonNumber={setPersonNumber}
      />
      <div>
        {storage.map((task, id) => (
          <Task
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
            key={id}
            task={task}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
