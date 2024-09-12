import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Registration from './Registration';
import Main from './Main';
import Login from './Login';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyB3YCkTQI1VlsVVmKxS1zwEIY6ooLL7-D8',
  authDomain: 'todo-app-7ddb4.firebaseapp.com',
  projectId: 'todo-app-7ddb4',
  storageBucket: 'todo-app-7ddb4.appspot.com',
  messagingSenderId: '575750394933',
  appId: '1:575750394933:web:689f21666271b87ddb4d7c',
  measurementId: 'G-NF20QXL7SR'
};

initializeApp(firebaseConfig);

const App = () => (
  <Router>
    <Routes>
      <Route path="/main" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/" element={<Main />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
);

export default App;


