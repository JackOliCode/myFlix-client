import React from 'react';
import { Row, Col, CardGroup } from 'react-bootstrap';


export const UserView = ({ user }) => {
    return (
        <Row>
          <CardGroup></CardGroup>
          <Col >
            <img src='https://via.placeholder.com/125x125.png?text=You' />
          </Col>
          <Col>
          <div md={3}>
            <span>Username: </span>
            <span className='fw-bolder'>{user.Username}</span>
          </div>
          <div md={3}>
            <span>Email: </span>
            <span className='fw-bolder'>{user.Email}</span>
          </div>
          <div md={3}>
            <span>Birthday: </span>
            <span className='fw-bolder'>{user.Birthday}</span>
          </div>
          </Col>
        </Row>
    );
};