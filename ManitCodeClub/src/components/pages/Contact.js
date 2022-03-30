import emailjs from "emailjs-com";
import React from "react";
import "./Contact.css";

export const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v8os4xe",
        "template_0gt1e81",
        e.target,
        "user_kgCKsQLNVOhxgNxdqJknE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div>
      <form onSubmit={sendEmail}>
        <section className="contact">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="head text-center text-white py-3">
                          <h3>Contact Us</h3>
                        </div>
                      </div>
                    </div>

                    <div className="form p-3">
                      <div className="form-row my-5 ">
                        <div className="col-lg-6 ">
                          <input
                            type="text"
                            className="effect-1"
                            name="name"
                            placeholder="Full Name"
                            required
                          ></input>
                          <span className="Focus-border"></span>
                        </div>
                      </div>
                      <div className="form-row pb-4 ">
                        <div className="col-lg-12 ">
                          <input
                            type="text"
                            className="effect-1"
                            name="user_email"
                            placeholder="Email Id"
                          ></input>
                          <span className="Focus-border"></span>
                        </div>
                      </div>
                      <div className="form-row pt-5">
                        <div className="col-lg-12 ">
                          <input
                            type="text"
                            className="effect-1"
                            name="message"
                            placeholder="Your Message"
                            required
                          ></input>
                          <span className="Focus-border"></span>
                        </div>
                      </div>
                      <br></br>

                      <div className=" col-lg-4">
                        <button type="submit" className="btn1">
                          SEND MESSAGE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};
