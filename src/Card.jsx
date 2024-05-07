import React from "react";
import img from "./img/46.jpeg";

function Card(props){
    return(
        <>
            <div className="Cards">
            <div className="img">
            <img src={img}/>
            <h4> Lorem ipsum dolor </h4>
            </div>
            <p>{props.p}</p>
            </div>
        </>
    )
}

export default Card;

