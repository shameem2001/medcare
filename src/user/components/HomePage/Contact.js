import React, { useState } from "react";

export default function Contact() {
  const [typedName, setTypedName] = useState("");
  const [typedEmail, setTypedEmail] = useState("");
  const [typedPhone, setTypedPhone] = useState("");
  const [typedMessage, setTypedMessage] = useState("");

  return (
    <div id="contact" className="contact-us">
      <section>
        <div className="container">
          <div className="text-center contact-us-sect-1">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading">
              Join with us to improve your experience on Medcare
            </h3>
          </div>
          <form id="contactForm" data-sb-form-api-token="API_TOKEN">
            <div className="row align-items-stretch mb-5 contact-form-div">
              <div className="col-md-6">
                <div className="form-group form-sect-2-left-1">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Your Name *"
                    data-sb-validations="required"
                    onChange={(e) => {
                      setTypedName(e.target.value);
                    }}
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>
                <div className="form-group form-sect-2-left-2">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="Your Email *"
                    data-sb-validations="required,email"
                    onChange={(e) => {
                      setTypedEmail(e.target.value);
                    }}
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    An email is required.
                  </div>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:email"
                  >
                    Email is not valid.
                  </div>
                </div>
                <div className="form-group mb-md-0 form-sect-2-left-3">
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    placeholder="Your Phone *"
                    data-sb-validations="required"
                    onChange={(e) => {
                      setTypedPhone(e.target.value);
                    }}
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="phone:required"
                  >
                    A phone number is required.
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-group-textarea mb-md-0 form-sect-2-right">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Your Message *"
                    data-sb-validations="required"
                    onChange={(e) => {
                      setTypedMessage(e.target.value);
                    }}
                  ></textarea>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="message:required"
                  >
                    A message is required.
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a
                className="btn btn-xl text-uppercase contact-button"
                id="submitButton"
                type="submit"
                style={{ color: "white", textDecoration: "none" }}
                href={`mailto:toshameem2001@gmail.com?subject=${
                  typedMessage.split(".")[0]
                }&body=Message: ${typedMessage.split(".")[1]}`}
              >
                Send Message
              </a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
