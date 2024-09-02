import React from "react";

function ToDoList({ tasks, moveTaskToDone }) {
    return (
        <div>
            <ol>
                {tasks.map((task, index) => (
                    <div className="taskOne" key={index}>
                        <div className="date"> Date: {task.date} </div>
                        <div className="task"> {task.text} </div>
                        <div>
                            <button className="finish" onClick={() => moveTaskToDone(index)}>
                                NOT FINISHED
                            </button>
                        </div>
                    </div>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;
