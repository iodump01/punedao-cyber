import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "../components/NavBar.css";

export const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className='navbar'>
        <Container>
          <Navbar.Brand href="/"  className="text-center m-auto fs-4">
            PUNEDAO
          </Navbar.Brand>
        </Container>
      </Navbar>
  
      
    </div>
  )
}


