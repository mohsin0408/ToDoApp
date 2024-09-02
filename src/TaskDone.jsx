import React from "react";

function TaskDone({ tasks, clearTaskFromDone }) {
    return (
        <div>
            <h2>Completed Tasks</h2>
            <ol>
                {tasks.map((task, index) => (
                    <div className="taskDone" key={index}>
                        <div className="date"> Date: {task.date} </div>
                        <div className="task"> {task.text} </div>
                        <div>
                            <button className="finish" onClick={() => clearTaskFromDone(index)}>
                                CLEAR
                            </button>
                        </div>
                    </div>
                ))}
            </ol>
        </div>
    );
}

export default TaskDone;
