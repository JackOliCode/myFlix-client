import React from 'react';
import { Row, Col } from 'react-bootstrap';


export const UserView = ({ user }) => {
    return (
        <Row>
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
          </Row>
    );
};