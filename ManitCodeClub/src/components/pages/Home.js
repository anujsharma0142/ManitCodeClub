import React from 'react';
import { Link } from "react-router-dom";


export const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="header">
                    <div className="row">
                        <div class="col-lg-6 col-md-6">
                                <h1>MANIT coding Club </h1>

            <p>MANIT code club help developers enhance their coding skills from beginning to advanced level.
            Any user can sign in through Email id and password or basic details and for 
            <br></br>MANIT users they just need to sign up with scholar id <br></br>    It contains an online contest which users need to participate and code using any preferred language  (C, C++, java, python) basically for newbies.
            </p>
  			
            

            <button className="btn btn-success bt-lg">View More</button> &nbsp;
            
  			<button  className="btn btn-primary bt-lg" ><Link className="Login" value="Login" to="/Login">Login </Link></button>
              
              {/* <button className="btn btn-primary"><Link className="Login" value="Login" to="/Login">Login</Link></button> */}
            
              
              </div>
  		
  		<div className="col-lg-6 col-md-6"> 

  			<img className="circle" src={process.env.PUBLIC_URL + "/images/logo.jpg"} alt="image" />
  		</div>
          </div>
          </div>
          
        </div>
        </div>
    );
}
