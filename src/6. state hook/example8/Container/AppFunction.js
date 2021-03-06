// import { render } from "@testing-library/react";
import { render } from "@testing-library/react";
import React, { useState } from "react";
import NewTask from "../Presentational/NewTask";
import TasksList from "../Presentational/TasksList";

export default function AppFunction() {
  const [newTask, setNewTask] = useState({});
  const [allTasks, setAllTasks] = useState([]);

  const handleChange = ({target}) => {
    const {name, value} = target;
    setNewTask((prev) => (
       {...prev, [name]: value, id: new Date()}
    ));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title) return;
    setAllTasks((prev) => (
      [newTask, ...prev]
    ))
    setNewTask({});
  }

  const handleDelete = (taskIdToRemove) => {
    setAllTasks((prev) => (
      prev.filter((task) => task.id !== taskIdToRemove)
    ));
  }

  return (
    <main>
      <h1>Tasks</h1>
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TasksList
        allTasks={allTasks}
        handleDelete={handleDelete}
      />
    </main>
  );
}
