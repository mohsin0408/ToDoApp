import React from 'react';

const ToDoList = ({ tasks, moveTaskToDone }) => (
  <div>
    <ol>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <li className="taskOne" key={index}>
            <div className="date">Date: {task.date}</div>
            <div className="task">{task.text}</div>
            <button className="finish" onClick={() => moveTaskToDone(index)}>TASK LEFT</button>
          </li>
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </ol>
  </div>
);

export default ToDoList;



