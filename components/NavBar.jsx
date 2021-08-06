import React from 'react'
import Navbar from 'react-bootstrap/Navbar'



export const NavBar = () => {
    return (
        <>
           <Navbar bg="light">
                <Navbar.Brand href="#home">
                    <img
                        src="/src/img/header-img.jpg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </Navbar> 
        </>
    )
}
