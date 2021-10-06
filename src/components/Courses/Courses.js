import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Course from "../Course/Course";
import("./Courses.css");

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./courses.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="home">
      <Container>
          <h3 className="mb-4">All Courses</h3>
        <Row xs={1} md={2} lg={3} className="g-4">
          {
          courses.map(course => <Course course={course}></Course>)
          }
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
