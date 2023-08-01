import { BsFillTrashFill } from "react-icons/bs";
import { MdDone, MdCircle } from "react-icons/md";
import "../styles/Task.css";

export const Task = ({ onDeleteTask, onToggleTask, task }) => {
  const { id, done, activity } = task;
  return (
    <div className="TaskContainer" key={id}>
      <button
        className="TaskContainter_button"
        onClick={() => onToggleTask(id)}
      >
        {done ? <MdDone /> : <MdCircle />}
      </button>
      <p className="TaskContainer-name">{activity}</p>
      <button
        className="TaskContainter_button"
        onClick={() => onDeleteTask(id)}
      >
        <BsFillTrashFill />
      </button>
    </div>
  );
};
