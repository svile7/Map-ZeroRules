import React from "react";
import "./home.style.scss"
import {Link} from "react-router-dom";
const Home = () => {
    return (
        <div className="container">
        <div className="homeContainer">
          
            <div className="dropdown">Start
            <div class="dropdown-content">
                 <h2>Welcome</h2>
                 
                 <Link to="/map" className="Link">Go to map</Link>
             </div>
             
             </div>
        </div>
        </div>
    )
}

export default Home;