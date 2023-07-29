import { Task } from "../interfaces";
import "../App.css";

interface Props {
  task: Task;
  handleDelete: (id: number) => void;
  handleEdit: (task: Task) => void;
}

const TaskCard = ({ task, handleDelete, handleEdit }: Props) => {
  return (
    <>
      <tr key={task.id}>
        <td>{task.name}</td>
        <td>{task.date.toISOString().split("T")[0]}</td>
        <td>{task.priority}</td>
        <td>{task.description}</td>
        <td>
          <button
            className="button-delete"
            onClick={() => handleDelete(task.id)}
          >
            Delete
          </button>
          <button className="button-edit" onClick={() => handleEdit(task)}>
            Edit
          </button>
        </td>
      </tr>
    </>
  );
};

export default TaskCard;
