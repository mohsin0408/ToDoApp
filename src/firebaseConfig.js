
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyB3YCkTQI1VlsVVmKxS1zwEIY6ooLL7-D8',
  authDomain: 'todo-app-7ddb4.firebaseapp.com',
  projectId: 'todo-app-7ddb4',
  storageBucket: 'todo-app-7ddb4.appspot.com',
  messagingSenderId: '575750394933',
  appId: '1:575750394933:web:689f21666271b87ddb4d7c',
  measurementId: 'G-NF20QXL7SR'
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

