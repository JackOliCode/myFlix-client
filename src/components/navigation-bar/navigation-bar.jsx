import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../index.scss";
export const NavigationBar = ({ user, onLoggedOut }) => {
    
    return (
    <Container className="nav_bg">
    <Navbar expand="lg" className="nav-bar-class justify-content-center">
      
        <Navbar.Brand as={Link} to="/">
            MyFlix        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user && (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/profile">
                    <span>Profile</span>
                </Nav.Link>
                <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    </Container>
  );
};