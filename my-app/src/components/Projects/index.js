import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import website1 from "../../images/willitstream.PNG";
// import website2 from "../../images/trackstar.PNG"

// import bootstrap

const Home = () => {
  return (
    <div className="container">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Will It Stream</Card.Title>
          <Card.Text>
            "Will It Stream" was our first project for our UCR bootcamp. The
            idea came because of quarantine and of all the different streaming
            services eveyone can be subscribe to.The idea is the search any
            movie and it will list all streaming services where the movie is
            availble.
          </Card.Text>
          <a target="_blank" href="https://willitstream.com/">
            <Button variant="primary">Click Here!</Button>
          </a>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="right" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Track Star</Card.Title>
          <Card.Text>
            "Track Star" is our second project. The concept of Track Star is to
            store all personal ordered tracking numbers in one place. The idea
            behind it is to have status of "Shipped" "In Transit" and
            "Delivered". This project is different from the first since this is
            the first time we created a user log in a authentication. We used my
            SQL for our database and were excited to test that out. Almost every
            website out there now requires some form of authentication, so it
            felt good putting that into place.
          </Card.Text>
          <a target="_blank" href="https://track-star-2021.herokuapp.com/">
            <Button variant="primary">Click Here!</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
