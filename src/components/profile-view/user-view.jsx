import React from 'react';
import { Row, Col, CardGroup } from 'react-bootstrap';


export const UserView = ({ user }) => {
    return (
        <Row>
          <CardGroup></CardGroup>
          <Col md={4}>
            <img src='https://via.placeholder.com/125x125.png?text=You' />
          </Col>
          <Col md={6}>
          <div >
            <span>Username: </span>
            <span className='fw-bolder'>{user.Username}</span>
          </div>
          <div >
            <span>Email: </span>
            <span className='fw-bolder'>{user.Email}</span>
          </div>
          <div >
            <span>Birthday: </span>
            <span className='fw-bolder'>{user.Birthday}</span>
          </div>
          </Col>
        </Row>
    );
};