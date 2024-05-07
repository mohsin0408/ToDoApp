import React from "react";

function Header(){
    return(
        <>
            <div className="MainHeader">
                <div className="Header">
                <h1>REALISTIC</h1>
                <p className="para">FREE WEBSITE TEMPLATE </p>
                </div>
                <div className="NewHeader">
                <span>Tel:xxxxxxxxxxxxxx | mail:info@domain.com</span>
              <span><input type="text" placeholder="Search"></input><button>SEARCH</button></span>
                </div>
                <div>
                <nav>
                    <ul className="Template">
                        <a><li>HOMEPAGE</li></a>
                        <a><li>STYLE DEMO</li></a>
                        <a><li>FULL WIDTH</li></a>
                        <a><li>DROPDOWN</li></a>
                        <a><li>PORTFOLIO</li></a>
                        <a><li>GALLERY</li></a>
                    </ul>
                </nav>
                </div>
            </div>
        </>
    )
}

export default Header;