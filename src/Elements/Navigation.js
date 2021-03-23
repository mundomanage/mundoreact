import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './NavMenu.css'
import { CgMenuGridR } from 'react-icons/cg'
import {NavbarData} from './NavbarData'
import ScrollIntoView from 'react-scroll-into-view'

function Navigation() {

    return (
        <Navbar collapseOnSelect expand="lg" className='lalal'>
            <Navbar.Brand href="#home"><img src='https://media.discordapp.net/attachments/440538747830796298/822177206511075358/rsz_mojwebsite_1.png' alt='mundo' className='logonashe'/></Navbar.Brand>
            <Navbar.Toggle><CgMenuGridR/></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav class="nav navbar-nav navbar-center">
                    
                </Nav>
                <Nav>
                {NavbarData.map((item, index) => {
                    const {title, AName, Selector} = item;
                    return (
                        <li key={index} className={item.name}>
                            <ScrollIntoView selector={Selector}>
                                <Nav.Link to={item.path} className={AName}>{title}</Nav.Link>
                            </ScrollIntoView>
                        </li>
                    )
                })}             
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
