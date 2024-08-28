import React from "react";
function Registration(){
    return(
        <>
            <div className="main-div">
                <div className="main-heading">
                    <h1>TODOs</h1>
                </div>
                <div className="login-form">    
                    <h2 className="heading-sm">Registration</h2>
                    <input type="Email" placeholder="Email" className="newInput"></input>
                    <input type="name" placeholder="name" className="newInput"></input>
                    <input type="Contact" placeholder="Contact" className="newInput"></input>
                    <input type="Password" placeholder="Password" className="newInput"></input>
                    <input type=" Confirm Password" placeholder="Confirm Password" className="newInput"></input>
                    <button className="newButton">Register</button>
                </div>
            </div>
        </>
    )
}
export default Registration;