import React from 'react';

const TaskDone = ({ tasks, clearTaskFromDone }) => (
  <div>
    <h2>Completed Tasks</h2>
    <ol>
      {tasks.map((task, index) => (
        <li className="taskOne" key={index}>
          <div className="date">Date: {task.date}</div>
          <div className="task">{task.text}</div>
          <button className="finish" onClick={() => clearTaskFromDone(index)}>Clear</button>
        </li>
      ))}
    </ol>
  </div>
);

export default TaskDone;


