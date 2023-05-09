import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    return (
        <div>
<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/resLogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            CODE CAFE
          </Navbar.Brand>
        </Container>
      </Navbar>
        </div>
    )
}

export default Header