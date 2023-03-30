import React, { useState } from 'react';
import { Button, Form, Row, Col, CardGroup, Card } from 'react-bootstrap';

export const UpdateView = ({ storedToken, user }) => {
  const [token, setToken] = useState(storedToken ? storedToken : null);

  const [username, setUsername] = useState(user.Username);
  const [password, setPassword] = useState();
  const [email, setEmail] = useState(user.Email);
  const [birthday, setBirthday] = useState(user.Birthday);

  const updateUser = (user) => {
    fetch(`https://jackoc-myflix.onrender.com/users/${user.Username}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((updatedUser) => {
        if (updatedUser) {
          console.log(updatedUser); 
          setUser(updatedUser);
          localStorage.setItem('user', JSON.stringify(updatedUser));
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday,
    };

    fetch(
      `https://jackoc-myflix.onrender.com/users/${user.Username}`,
      {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log(token)
          alert('Changes saved');
          updateUser(user);
        } else {
          alert('Oops, somethings gone wrong');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    
    <Row className="mt-2">
      <Col >
        <CardGroup>
          <Card className="customCard card_body" style={{textAlign: "center", marginBottom: 50, width: '30px'}}>
            <Card.Body>
              <div className='h2'>Update user info</div>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId='formUsername' className='mt-2'>
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    minLength='3'
                    title="Username should contain more than 3 characters, may only contain letters, numbers and special characters: .,'-!?%&"
                  />
                </Form.Group>

                <Form.Group controlId='formEmail' className='mt-2'>
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder='Enter email'
                  />

                </Form.Group>
                <Form.Group controlId='forBirthday' className='mt-2'>
                  <Form.Label>Birthday:</Form.Label>
                  <Form.Control
                    type='date'
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId='forPassword' className='mt-2'>
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    pattern="^[A-Za-z0-9 .,'\-!?%&]+$"
                    title="Password may only contain letters, numbers and special characters: .,'-!?%&"
                    placeholder='Please enter your password to update'
                  />
                  </Form.Group>

                <Row>
                  <Col className='text-end'>
                    <Button variant='primary' type='submit' className='mt-3'>
                      Update
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </CardGroup>
      </Col>
    </Row>
  );
};