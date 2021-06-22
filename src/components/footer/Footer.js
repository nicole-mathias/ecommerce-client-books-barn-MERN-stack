import React from "react";
import {Icon} from "semantic-ui-react";
import "./footer.css";


function Footer() {
    return(
        <div>
            <div className = "footer">
                <div className = "footer-heading">Connect with me</div>

                <section className = "content">
                    <div className = "footer-data">
                        <a href = "https://github.com/nicole-mathias">
                            <Icon className = "symbol"  name='github'/>
                            GitHub | 
                        </a>
                    </div>

                    <div className = "footer-data">
                        <a href = "https://www.linkedin.com/in/nicole-mathias-1a52251aa/">
                            <Icon className = "symbol"  name='linkedin'/>
                            LinkedIn |
                        </a>
                    </div>


                    <div className = "footer-data">
                        <a href = "https://www.linkedin.com/in/nicole-mathias-1a52251aa/">
                            <Icon className = "symbol"  name='twitter square'/>
                            Twitter
                        </a>
                    </div>

                </section>

                <div className = "footer-heading">Contact me</div>
                    <section className = "content contact">

                                <Icon className = "symbol"  name='mail'/>
                                <div style = {{color: "rgb(68, 59, 59)"}}>nicolemathias0@gmail.com</div>

                    </section>
    
            </div>
            

        </div>
    )
}


export default Footer;