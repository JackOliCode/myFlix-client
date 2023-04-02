import React from "react";
import { useState, useEffect } from "react";
import { Button, Form, Card, CardGroup, Container, Col, Row } from "react-bootstrap";
import "./signup.scss";

export const SignupView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    };

    fetch("https://jackoc-myflix.onrender.com/users/", 
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      if (response.ok) {
        alert("Signup successful");
        window.location.replace("/login");
      } else {
        alert("Signup failed");
      }
    });
  };

  return (
    <Container style={{marginTop: "40%", marginBottom: "40%"}}>
      <Row >
        <Col >
          <CardGroup>
            <Card className="customCard card_body" style={{textAlign: "center", marginBottom: 50, width: '30px'}}>
            <Card.Body>
              <Card.Title>Register</Card.Title>
              
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                minLength="3"
                className="mb-1"
                placeholder="Enter your new username"
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label className="">Password:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mb-1"
                minLength="8"
                placeholder="Enter your password. Shhh."
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label className="">Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mb-1"
                placeholder="Enter your email address"
              />
            </Form.Group>

            <Form.Group controlId="formBirthday">
              <Form.Label className="">Birthday:</Form.Label>
              <Form.Control
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                required
                className="mb-2"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </Card.Body>
          </Card> 
        </CardGroup>        
      </Col>

    </Row>


  </Container>
    
  );
};
