import React, { useEffect, useState } from "react";
import{BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom";
import Registration from "./Registration";
import Main from "./Main";
import Login from "./Login";

const App = ()=>{
    const LOCAL_STORAGE_KEY = "tasks";
    const [tasks,setTasks] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);
    const [isLoggedIn,setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

    useEffect(()=>{
        setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true")
    },[])

    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
      }, [tasks]);

    return(
    <>
    <Router>
    <Routes>
       <Route path="/main" 
       element={ isLoggedIn ? <Navigate to="/"/> : <Login setIsLoggedIn ={setIsLoggedIn} />} /> 
       <Route path="/register" element={<Registration/>} /> 
       <Route path="/" element={<Main/>} />  
    </Routes>    
    </Router>  

    {/* <Login/>
    <Registration/>
    <Main/> */}
    </>
    )
}
export default App;


