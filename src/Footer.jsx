import React from "react";
import Projects from "./Projects";
import Blog from "./Span";

function Footer(){
    return(
        <>
        <div className="footer">
            <div className="Latest">
                <Projects/>
            </div>
            
            <div className="Span">
                <Blog h4="Latest from the Blogs"/>
            </div>

            <div className="Span">
                <Blog h4="Keep in Touch"/>
            </div>
        </div>
        </>
    )
}

export default Footer;