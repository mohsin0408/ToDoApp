import React from "react";
import img from "./img/130.jpeg";

function Scards(props){
    return(
        <>
            <div className="Scards">
            <img src={img}/>
            <h2>Lorem Ipsum Dolor</h2>
            <p>{props.p}</p>
            </div>
        </>
    )
}

export default Scards;
