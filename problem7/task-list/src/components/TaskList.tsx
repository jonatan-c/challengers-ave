import { Task } from "../interfaces";
import TaskCard from "./TaskCard";
import "../App.css";

interface Props {
  tasks: Task[];
  handleDelete: (id: number) => void;
  handleEdit: (task: Task) => void;
}

const TaskList = ({ tasks, handleDelete, handleEdit }: Props) => {
  return (
    <>
      <h2>Tasks List</h2>
      {tasks.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Priority</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No tasks yet.</p>
      )}
    </>
  );
};

export default TaskList;
