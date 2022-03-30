import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Forum() {
    let textareaStyle = {
        border: "1px",
        background: "-webkit-linear-gradient(left, rgb(1 28 56), #8a04a8ee)",
        color: "#ffff"
    }
    let buttonStyle = {
        backgroundolor: "#2196F3",
        marginTop: "5%",
        border: "none",
        borderRadius: "1.5rem",
        padding: "1%",
        marginBottom: "4%",
        background: "#0062cc",
        color: "#fff",
        fontWeight: "600",
        width: "10%",
        cursor: "pointer",
    }

const [email, setEmail] = useState("");
const [comm, setComm] = useState("");
const [dataList, setDataList] = useState([])
function Addcomment(e) {
    e.preventDefault();
    if(email ==="" || comm ===""){
        alert("all fields are required")
    }
    else{
    // constructing Form Data
    var addComm = {
        userid: email,
        usercomment: comm,
    };
    console.log("----------feedFormData---", addComm)
    // post data to server
    axios.post('http://localhost:5000/Forum', addComm)
        .then(function (response) {
            console.log(response);
            if (response.status === 200) {
                console.log("Login successfull");

            }
        })
        .catch(function (error) {
            console.log(error);
            if (error.response) {
                console.log("--------------------------------------------------")
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log("*************************")

                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                console.log("++++++++++++++++++++++++")
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);

        });
    // setDataList([])
    axios.get('http://localhost:5000/getdata')
        .then(response => {
            //console.log("aaa", response);
            setDataList(response.data.result)
            //console.log("bbb", response.data.result , "ccc", dataList);
        })
    setEmail("");
    setComm("")
}
}
useEffect(() => {
    axios.get('http://localhost:5000/getdata')
        .then(response => {
            setDataList(response.data.result)
        })
}, [])

return (
    <>
        <div className="container mx-6 my-5 px-5 py-3 col-md-8 shadow" style={textareaStyle}>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Email id</label>
                <input type="email" className="form-control col-sm-10" placeholder="Your Email *"  value={email} id="fname" onChange={(e) => setEmail(e.target.value)} /><br/>

                <label for="exampleFormControlTextarea1" className="form-label">Comment</label>
                <textarea className="form-control col-sm-10" id="exampleFormControlTextarea1" rows="3" placeholder="Add your comment" value={comm} onChange={(e) => setComm(e.target.value)}></textarea>
            </div>
            <button type="button" className="btn-success" style={buttonStyle} onClick={Addcomment}>Submit</button>
        </div>
        <div className="container m7-5 my-5 px-5 py-3 col-md-8 shadow" style={textareaStyle}>
            <h3>Your Comments</h3><hr />
            {React.Children.toArray(
                dataList.map((element) => {
                    return (
                        <>
                            <Display email={element.userid} comment={element.usercomment} />
                        </>
                    );
                })
            )}
        </div>
    </>
)
function Display({ email, comment }) {
    return (
        <>
            <div className="Display display-box">
                <div>
                    <kbd>{email}</kbd>
                    <p>{comment}</p>
                </div>
            </div>
        </>
    );
}
}