import React, { useState } from 'react'
import './signin.css';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Login() {
    const [pass, setPass] = useState("");
    const [email, setEmail] = useState("");
    function login(e) {
        e.preventDefault();
        if (pass === "" || email === "") {
            alert("all * fields are required");
        } else {
                var loginData = {
                    userid: email,
                    userpassword: pass
                };
                console.log("----------feedFormData---",loginData);

                // post data to server
                axios.post('http://localhost:5000/login', loginData)
                    .then(function (response) {
                        console.log(response);
                        if (response.data !== "") {
                            console.log("Login successfull");
                        }
                        else{
                            alert("check your credentials")
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                setPass("");
                setEmail("");
        }
    }
    return (
        <div className="container register1">
            <div className="row">
                <div className="col-md-3 register1-left">
                    <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                    <h3>Welcome To</h3>
                    <p>MANIT Code Club Login Page</p>
                    {/* <Link className="Login" value="SignUp" to="/SignUp">SignUp</Link><br /> */}
                    <button className="btn btn-primary"><Link className="Login" value="SignUp" to="/SignUp">SignUp</Link></button>
                </div>
                <div className="col-md-9 register1-right">
                    <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Student</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Developer</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h3 className="register1-heading">Login as a Student</h3>
                            <div className="row register1-form">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Your Email *" value={email} id="fname" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div><br></br><br></br><br></br>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password *" value={pass} id="fname" onChange={(e) => setPass(e.target.value)} />
                                    </div>
                                    
                                    <input type="submit" className="btnregister1" value="login" onClick={login} />
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <h3 className="register1-heading">Login as a Developer</h3>
                            <div className="row register1-form">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="First & Last Name *" value="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password *" value="" />
                                    </div>
                                    <input type="submit" className="btnregister1" value="register1" />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
