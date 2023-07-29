import React, { useState, ChangeEvent, FormEvent } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import { Task } from "./interfaces";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    priority: "",
    description: "",
  });
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [editedTask, setEditedTask] = useState<Task | null>(null);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (
      formData.name &&
      formData.date &&
      formData.priority &&
      formData.description
    ) {
      if (editTaskId !== null && editedTask) {
        // Update existing task
        const updatedTasks = tasks.map((task) =>
          task.id === editTaskId
            ? {
                ...task,
                name: formData.name,
                date: new Date(formData.date),
                priority: formData.priority,
                description: formData.description,
              }
            : task
        );

        setTasks(updatedTasks);
        setEditTaskId(null);
        setEditedTask(null);
      } else {
        // Add new task
        const newTask: Task = {
          id: Date.now(),
          name: formData.name,
          date: new Date(formData.date),
          priority: formData.priority,
          description: formData.description,
        };

        setTasks([...tasks, newTask]);
      }

      setFormData({
        name: "",
        date: "",
        priority: "",
        description: "",
      });
    }
  };

  const handleEdit = (task: Task) => {
    setEditTaskId(task.id);
    setEditedTask(task);
    setFormData({
      name: task.name,
      date: task.date.toISOString().split("T")[0],
      priority: task.priority,
      description: task.description,
    });
  };

  const handleDelete = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleClearAll = () => {
    setEditTaskId(null);
    setEditedTask(null);
    setFormData({
      name: "",
      date: "",
      priority: "",
      description: "",
    });
  };

  const handleClearAllTASKS = () => {
    setTasks([]);
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <form className="task-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="priority">Priority:</label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            required
          >
            <option value="">Select Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            required
          />
        </div>
        <div className="form-actions">
          {editTaskId !== null && editedTask ? (
            <>
              <button className="button-update" type="submit">Update</button>
              <button className="button-cancel" type="button" onClick={handleClearAll}>
                Cancel
              </button>
            </>
          ) : (
            <>
              <button className="button-add-task" type="submit">Add Task</button>
              <button className="button-clear-all" type="button" onClick={handleClearAllTASKS}>
                Clear All
              </button>
            </>
          )}
        </div>
      </form>

      <TaskList
        tasks={tasks}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
