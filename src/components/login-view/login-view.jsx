import React from "react";
import { useState, useEffect } from "react";
import { Button, Form, Card, CardGroup, Container, Col, Row } from "react-bootstrap";
import "../signup-view/signup.scss";


export const LoginView = ({ onLoggedIn }) => { // need to pass this on as a parameter

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        // this is to prevent default behaviour of form, which is to reload the page
        event.preventDefault();

        const data = {
            Username: username,
            Password: password
        };

        fetch("https://jackoc-myflix.onrender.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.json()) //This transforms the response content into a JSON object.
        .then((data) => {
            console.log("Login Response: ", data);
            if (data.user) {
                localStorage.setItem("user", JSON.stringify(data.user));
                localStorage.setItem("token", data.token);
                onLoggedIn(data.user, data.token); //You pass the user and token back to MainView so that they can be used
            } else {
                alert("No such user");
            }
        })
        .catch((e) => {
            alert("Something went wrong");
        });
    };

    
    return (
      <Container style={{marginTop: "40%", marginBottom: "70%"}}>
      <Row >
        <Col >
          <CardGroup>
            <Card className="customCard card_body" style={{textAlign: "center", marginBottom: 50, width: '30px'}}>
            <Card.Body>
              <Card.Title>Log-In</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label >Username:</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              minLength="3"
              className="mb-1"
            />
          </Form.Group>
    
          <Form.Group controlId="formPassword">
            <Form.Label >Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
