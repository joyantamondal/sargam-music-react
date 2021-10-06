import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs = () => {
    return (
       
       <div className="about">
            <Container>
            <h3 className="mb-3 mt-3">About Us</h3>
            <Row xs={1} md={2} lg={3} className="g-4">
          <Col className="card">
            <Card >
              <Card.Img className="about-img" variant="top" src="https://cdn.pixabay.com/photo/2020/02/07/12/45/boy-4827065_960_720.jpg" />
              <Card.Body>
                <Card.Title>Kiron Kumar Das</Card.Title>
                <Card.Text>
                  CEO: Sargam
                </Card.Text>
                <Card.Text>
                  10 Years Working Experience on Related Field
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img className="about-img" variant="top" src="https://www.theindependentbd.com/assets/news_images/Syed-Abdul-Hadi21.jpg" />
              <Card.Body>
                <Card.Title>Abdul Hadi</Card.Title>
                <Card.Text>
                  Management Head: Sargam
                </Card.Text>
                <Card.Text>
                  9 Years Working Experience on Related Field
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img className="about-img" variant="top" src="https://i1.sndcdn.com/avatars-000213895904-msshn1-t240x240.jpg" />
              <Card.Body>
                <Card.Title>Joyanta Mondal</Card.Title>
                <Card.Text>
                  Music Artist: Sargam
                </Card.Text>
                <Card.Text>
                  7 Years Working Experience on Related Field
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img className="about-img" variant="top" src="https://i1.sndcdn.com/artworks-CPGSoridzndZrt4q-7yemUA-t500x500.jpg" />
              <Card.Body>
                <Card.Title>Souvik Sarker</Card.Title>
                <Card.Text>
                  Lead Vocalist: Sargam
                </Card.Text>
                <Card.Text>
                  10 Years Working Experience on Related Field
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img className="about-img" variant="top" src="https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/ijojdpivq3asywkm_1612174816.jpeg" />
              <Card.Body>
                <Card.Title>Shreeya Ghosal</Card.Title>
                <Card.Text>
                  Event Management Head: Sargam
                </Card.Text>
                <Card.Text>
                  6 Years Working Experience on Related Field
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img className="about-img" variant="top" src="https://images.news18.com/ibnlive/uploads/2021/03/1615540466_pjimage-10.jpg" />
              <Card.Body>
                <Card.Title>Arijit Singh</Card.Title>
                <Card.Text>
                  Mentor Leader: Sargam
                </Card.Text>
                <Card.Text>
                  6 Years Working Experience on Related Field
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
    
      </Row>
        </Container>
       </div>
    );
};

export default AboutUs;