import React, {useState} from "react";
import "./navbar.css";
import {Link} from "react-router-dom";
import {Icon} from "semantic-ui-react";
import logo from "../../images/logo.png";



function Navbar() {

    const [showLinks, setShowLinks] = useState(false);

    return(
        <div className = "navbar">

            <div className = "leftSide">
                    <img className = "logo" src = {logo} alt = ""/>

                    <Link to = {"/"}>
                        <div style = {{paddingLeft: "0.5rem", color: "black"}}>Books Barn</div>
                    </Link>
                
              
                
            </div>

            <div className = "rightSide">
                {/* we are setting an id as hidden or empty, so that whn showLink is true, we know that the button to display the menu items on hamburger should not be there */}
                <div className = "links" id = {showLinks ? "hidden" : ""}>


                <Link to={"/"}>
                        <Icon className = "symbol" bordered  name='home' size='large'/>
                    </Link>


                    <Link to={"/search"}>
                        <Icon className = "symbol" bordered  name='search' size='large'/>
                    </Link>

                    <Link to>
                        <Icon className = "symbol" bordered  name='heart' size='large'/>
                    </Link>

                    <Link to = {"/cart"}>
                        <Icon className = "symbol" bordered  name='cart' size='large'/>
                    </Link>
                                       
                </div>

                <Icon 
                    className = "hamburger" 
                    name = "bars" 
                    size='large' 
                    onClick = {() => setShowLinks(!showLinks)}/>
                

            </div> 
        </div>
    );
}

export default Navbar;




