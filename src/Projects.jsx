import React from "react";
import img from "./img/80.jpeg"

function Projects (){
    return(
        <>
        <h4> Latest Projects </h4>
            <div className="projects">
            <img src={img} alt="80_pic" className="eighty"/>
            <img src={img} alt="80_pic" className="eighty"/>
            <img src={img} alt="80_pic" className="eighty"/>
            <img src={img} alt="80_pic" className="eighty"/>
            <img src={img} alt="80_pic" className="eighty"/>
            <img src={img} alt="80_pic" className="eighty"/>
            <img src={img} alt="80_pic" className="eighty"/>
            <img src={img} alt="80_pic" className="eighty"/>
            </div>
        </>
    )
}

export default Projects