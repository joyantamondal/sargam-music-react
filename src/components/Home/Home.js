import React, { useEffect, useState } from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import HomeMusic from "../HomeMusic/HomeMusic";
import("./Home.css");

const Home = () => {
  const [musicHome, setmusicHome] = useState([]);
  useEffect(() => {
    fetch("./musicHome.JSON")
      .then((res) => res.json())
      .then((data) => setmusicHome(data));
  }, []);
  return (
    <div className="home">
      <Container>
        <Carousel className="mb-4">
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 slider-img"
              src="https://i2.wp.com/lyricsblue.com/wp-content/uploads/2021/05/Chotoder-Rabindra-Sangeet-List.webp?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="upcoming-tite shadow-md">Upcoming Course</h3>
              <p className="upcoming-course">Rabindra Sangeet</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100 slider-img"
              src="https://www.banglanews24.com/public/uploads/2021/07/06/1625587211.nazrul-bg.jpg?text=Second slide&bg=282c34"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 className="upcoming-tite">Upcoming Course</h3>
              <p className="upcoming-course">Nazrul Sangeet</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src="https://www.publicradiotulsa.org/sites/kwgs/files/styles/medium/public/202107/Classical.png?text=Third slide&bg=20232a"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 className="upcoming-tite">Upcoming Course</h3>
              <p className="upcoming-course">Classical Music</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h3 className="mb-4">Top 4 Course</h3>
        <Row xs={1} md={2} lg={4} sm={1} className="g-4">
          {musicHome.map((music) => (
            <HomeMusic music={music} key={music.id}></HomeMusic>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
