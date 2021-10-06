import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Course.css'

const Course = (props) => {
    const {title,img,mentor,duration,date,fee} = props.course;
    return (
        <div>
             <Col>
            <Card className="card shadow-lg ">
    <Card.Img variant="top" src={img}  className="card-img"/>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        Mentor: {mentor}
      </Card.Text>
      <Card.Text>
       Course Starting at: {date}
      </Card.Text>
      <Card.Text>
       Course Fee: {fee}
      </Card.Text>

    </Card.Body>
    <Card.Footer>
      <small>Duration: {duration}</small>
    </Card.Footer>
  </Card>
          </Col>
        </div>
    );
};

export default Course;