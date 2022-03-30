import React, { useState } from 'react'
import './signin.css';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function SignUp({ List, setList }) {
    const [fname, setFname] = useState("");
    const [pass, setPass] = useState("");
    const [email, setEmail] = useState("");
    const [cpass, setCpass] = useState("");
    function register(e) {
        e.preventDefault();
        if (fname === "" || pass === "" || email === "" || cpass === "") {
            alert("all * fields are required");
        } else {
            if(cpass === pass){
                var register1Data = {
                    userid: email,
                    userpassword: pass
                };
                console.log("----------feedFormData---",register1Data);
                // post data to server
                axios.post('http://localhost:5000/SignUp', register1Data)
                    .then(function (response) {
                        console.log(response);
                        if (response.status === 200) {
                            console.log("Login successfull");
        
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                setFname("");
                setPass("");
                setEmail("");
                setCpass("");
            }else{alert("Confirm Password not matched")
                setCpass('')
                setPass("")}  
        }
    }

    return (
        <div className="container register1">
            <div className="row">
                <div className="col-md-3 register1-left">
                    <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                    <h3>Welcome To</h3>
                    <p>MANIT Code Club SignUp Page</p>
                    <button className="btn btn-primary"><Link className="Login" value="Login" to="/Login">Login</Link></button>
                </div>
                <div className="col-md-9 register1-right">
                    <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Student</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#" role="tab" aria-controls="profile" aria-selected="false">Developer</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h3 className="register1-heading">Apply as a Student</h3>
                            <div className="row register1-form">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control " placeholder="First & Last Name *" value={fname} id="fname" onChange={(e) => setFname(e.target.value)} />
                                    </div><br></br><br></br>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Your Email *" value={email} id="fname" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password *" value={pass} id="fname" onChange={(e) => setPass(e.target.value)} />
                                    </div><br></br><br></br>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Confirm Password *" value={cpass} id="fname" onChange={(e) => setCpass(e.target.value)} />
                                    </div>

                                    <input type="submit" className="btnregister1" value="Sign up" onClick={register} />
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <h3 className="register1-heading">Apply as a Developer</h3>
                            <div className="row register1-form">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="First Name *" value="" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Last Name *" value="" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email *" value="" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" maxlength="10" minlength="10" className="form-control" placeholder="Phone *" value="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password *" value="" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Confirm Password *" value="" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="`Answer *" value="" />
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
