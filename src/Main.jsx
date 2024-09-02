import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ToDoList from "./ToDoList";
import TaskDone from "./TaskDone";

function Main() {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);
    const [inputList, setInputList] = useState('');
    const [doneTasks, setDoneTasks] = useState([]);
    const [view, setView] = useState('todos'); // Track which view is active

    const handleInputChange = (event) => {
        setInputList(event.target.value);
    };

    const addTask = () => {
        if (inputList.trim() !== "") {
            setTasks(prevTasks => [...prevTasks, { text: inputList, date: new Date().toDateString() }]);
            setInputList('');
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    };

    const handleLogout = () => {
        navigate("/main");
    };

    const moveTaskToDone = (index) => {
        const task = tasks[index];
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
        setDoneTasks(prevDoneTasks => [...prevDoneTasks, task]);
    };

    const clearTaskFromDone = (index) => {
        setDoneTasks(prevDoneTasks => prevDoneTasks.filter((_, i) => i !== index));
    };

    const showTodos = () => {
        setView('todos');
    };

    const showFinished = () => {
        setView('finished');
    };

    return (
        <>
            <div className="Navbar">
                <div className="Menu"> <IoMenuSharp /> </div>
                <div className="main-heading"> TODOs </div>
                <div> <FaRegCalendarCheck /> </div>
            </div>

            <div className="center-div">
                {view === 'todos' && (
                    <>
                        <div>
                            <input 
                                type="text" 
                                placeholder="ADD TASK" 
                                value={inputList} 
                                onChange={handleInputChange} 
                                onKeyDown={handleKeyDown} 
                            />
                            <button className="circle" onClick={addTask}>+</button>
                        </div>
                        <ToDoList tasks={tasks} moveTaskToDone={moveTaskToDone} />
                    </>
                )}

                {view === 'finished' && (
                    <TaskDone tasks={doneTasks} clearTaskFromDone={clearTaskFromDone} />
                )}
            </div>

            <div className="final">
                <button className="color" onClick={showTodos}>TODOS</button>
                <button className="color" onClick={showFinished}>FINISHED</button>
            </div>

            <br/>

            <button onClick={handleLogout} className="logout">Logout</button>
        </>
    );
}

export default Main;
