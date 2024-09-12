
import { ref, set, onValue, remove } from 'firebase/database';
import { auth } from './firebaseConfig';
import { signOut } from 'firebase/auth';
import { db } from './firebaseConfig'; 


export const fetchTasks = (userId, callback) => {
    const tasksRef = ref(db, `tasks/${userId}`);
    onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();
      console.log('Fetched tasks:', data);
      callback(data ? Object.values(data) : []);
    });
};

export const fetchDoneTasks = (userId, callback) => {
    const doneTasksRef = ref(db, `doneTasks/${userId}`);
    onValue(doneTasksRef, (snapshot) => {
      const data = snapshot.val();
      callback(data ? Object.values(data) : []);
    });
  };



export const addTask = (userId, task, callback) => {
    const newTaskRef = ref(db, `tasks/${userId}/${Date.now()}`);
    set(newTaskRef, task)
      .then(() => callback())
      .catch(error => {
        console.error('Error adding task:', error);
      });
};


export const moveTaskToDone = (userId, taskId, task, callback) => {
    const taskRef = ref(db, `tasks/${userId}/${taskId}`);
    remove(taskRef).then(() => {
      const doneTaskRef = ref(db, `doneTasks/${userId}/${Date.now()}`);
      set(doneTaskRef, task).then(() => callback());
    });
  };


export const clearTaskFromDone = (userId, taskId, callback) => {
  const taskRef = ref(db, `doneTasks/${userId}/${taskId}`);
  remove(taskRef)
    .then(() => callback())
    .catch(error => {
      console.error('Error removing task:', error);
    });
};

export const handleLogout = () => signOut(auth);



