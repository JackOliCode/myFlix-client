import React from 'react';
import { Row, Col } from 'react-bootstrap';


export const UserView = ({ user }) => {
    return (
        <Row>
          <Col>
            <span>Username: </span>
            <span className='fw-bolder'>{user.Username}</span>
          </Col>
          <Col>
            <span>Email: </span>
            <span className='fw-bolder'>{user.Email}</span>
          </Col>
          <Col>
            <span>Birthday: </span>
            <span className='fw-bolder'>{user.Birthday}</span>
          </Col>
          </Row>
    );
};