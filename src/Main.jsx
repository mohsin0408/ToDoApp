
import React, { useState, useEffect } from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import { FaRegCalendarCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';
import { auth, db } from './firebaseConfig'; 
import ToDoList from './ToDoList';
import TaskDone from './TaskDone';
import {
  fetchTasks,
  fetchDoneTasks,
  addTask,
  moveTaskToDone,
  clearTaskFromDone,
  handleLogout
} from './firebaseUtils';

const Main = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [inputList, setInputList] = useState('');
  const [doneTasks, setDoneTasks] = useState([]);
  const [view, setView] = useState('todos');

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      fetchTasks(user.uid, setTasks);
      fetchDoneTasks(user.uid, setDoneTasks);
    } else {
      navigate('/main');
    }
  }, [navigate]);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const tasksRef = ref(db, `tasks/${user.uid}`);
      const doneTasksRef = ref(db, `doneTasks/${user.uid}`);

      const handleTasksUpdate = (snapshot) => {
        const data = snapshot.val();
        setTasks(data ? Object.values(data) : []);
      };

      const handleDoneTasksUpdate = (snapshot) => {
        const data = snapshot.val();
        setDoneTasks(data ? Object.values(data) : []);
      };

      const tasksListener = onValue(tasksRef, handleTasksUpdate);
      const doneTasksListener = onValue(doneTasksRef, handleDoneTasksUpdate);

      return () => {
        tasksListener();
        doneTasksListener();
      };
    }
  }, []);

  const handleInputChange = (e) => setInputList(e.target.value);

  const handleAddTask = () => {
    const user = auth.currentUser;
    if (inputList.trim() && user) {
      const newTask = { text: inputList, date: new Date().toDateString() };
      addTask(user.uid, newTask, () => setInputList(''));
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  const handleLogoutClick = () => {
    handleLogout().then(() => navigate('/main'));
  };

  const handleMoveTaskToDone = (index) => {
    const user = auth.currentUser;
    if (user) {
      const task = tasks[index];
      const taskId = Object.keys(task)[0];
      moveTaskToDone(user.uid, taskId, task, () => {
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
      });
    }
  };

  const handleClearTaskFromDone = (index) => {
    const user = auth.currentUser;
    if (user) {
      const task = doneTasks[index];
      const taskId = Object.keys(task)[0];
      clearTaskFromDone(user.uid, taskId, () => {
        setDoneTasks((prevDoneTasks) => prevDoneTasks.filter((_, i) => i !== index));
      });
    }
  };

  const showTodos = () => setView('todos');
  const showFinished = () => setView('finished');

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
              <button className="circle" onClick={handleAddTask}>+</button>
            </div>
            <ToDoList tasks={tasks} moveTaskToDone={handleMoveTaskToDone} />
          </>
        )}
        {view === 'finished' && (
          <TaskDone tasks={doneTasks} clearTaskFromDone={handleClearTaskFromDone} />
        )}
      </div>

      <div className="final">
        <button className="color" onClick={showTodos}>TODOS</button>
        <button className="color" onClick={showFinished}>FINISHED</button>
      </div>

      <button onClick={handleLogoutClick} className="logout">Logout</button>
    </>
  );
};

export default Main;


