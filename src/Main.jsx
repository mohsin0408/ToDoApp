import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Main(){
    const navigate = useNavigate();

    // const handleLogout = () => {
    //     localStorage.removeItem("isLoggedIn");
    //     navigate("/main");
    // };

    const handleLogout = () => {
        // Clear the local storage item
        localStorage.removeItem("isLoggedIn");
        
        // Update the local state if needed
        // Optionally, you can use a state management solution to update the login state globally

        // Navigate to the login page
        navigate("/main");  // Redirect to login page
    };


    return(
        <>
            <div className="Navbar">
                <div className="Menu"> <IoMenuSharp /> </div>
                <div className="main-heading"> TODOs </div>
                <div> <FaRegCalendarCheck /> </div>
            </div>

            <div className="taskOne">
                <div className="date"> Date: Wed,22 Jan 2020 </div>  
                <div className="task"> task 1 </div>
                <div> <p className="finish">FINISH</p> </div>
            </div>
            <br/>
            <div className="taskOne">
                <div className="date"> Date: Wed,22 Jan 2020 </div>  
                <div className="task"> task 2 </div>
                <div> <p className="finish">FINISH</p> </div>
            </div>

            <div><button className="circle">+</button></div>
            <div className="final">
                <div className="color">TODOS</div>
                <div>FINISHED</div>
            </div>

            <br/>

            <div className="Navbar">
                <div className="Menu"> <IoMenuSharp /> </div>
                <div className="main-heading"> TODOs </div>
                <div> <FaRegCalendarCheck /> </div>
            </div>

            <div className="taskOne">
                <div className="date"> Date: Wed,22 Jan 2020 </div>  
                <div className="task"> task 2 </div>
                <div> <p className="finish">FINISH</p> </div>
            </div>
            <br/>
            <div><button className="circle">+</button></div>
            <div className="final">
                <div>TODOS</div>
                <div className="color">FINISHED</div>
            </div>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}
export default Main;

