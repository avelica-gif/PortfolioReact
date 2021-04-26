import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import selfie from "../../images/marketavi1.jpg";
const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src={selfie} alt="Avelica Rubio" style={{ height: "40%" }} />
        </div>

        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">About Me</h5>
              <p className="card-text">
                Hello! My name is Avelica Rubio and I am extremely new to
                coding. I graduated from Cal Poly Pomona with a Bachelor's in
                Fashion Merchandising. My whole life I did interships in fashion
                and even got a temp job after college as a Product Order Clerk.
                But somehow, I have been working as a customer service IT for an
                email company the past 3 years. That is what got me interested
                more in the tech world. Even though coding had been in the back
                of my head for the past 5 years, I just never did anything about
                it.Besides fashion, one my main passsion has been gaming.I have
                been playing video games ever since I was a child and the
                passion of playing games only grew stronger through out the
                years. I do get competitive and always want to better myself
                when it comes to certain games.
              </p>
              <Link className="btn btn-primary">My Resume</Link>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
