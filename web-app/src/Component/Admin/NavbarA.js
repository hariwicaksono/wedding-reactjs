import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
import { NotificationManager } from 'react-notifications'
import {Navbar, Nav, NavItem, Button, Form, FormControl} from 'react-bootstrap'

class NavbarA extends Component {
    constructor(props){
        super(props)
        this.state = {
            login : false
        }
        this.logout = this.logout.bind(this)
    }

    logout = () => {
        sessionStorage.setItem('isAdmin','')
        sessionStorage.clear()
        this.setState({
            login : true
        })
        NotificationManager.success('Berhasil keluar dari sistem', 'Logout!');
    }

    componentDidMount = () => {
        if(sessionStorage.getItem('isAdmin')){
            console.log('ADMIN')
        } else {
            this.setState({
                login : true
            })
        }
    }

    render() {
        if (this.state.login) {
            return( <Redirect to='/login' /> )
        }
        return (
            <div>
                <Navbar className="shadow mb-3" variant="dark" expand="lg" style={{backgroundColor:"#B68364"}}>
                <Navbar.Brand as={Link} to="/">Wedding Disfo (CI+ReactJS)</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/admin" >HOME</Nav.Link>
                                <Nav.Link as={Link} to="/oranga" >DATA TAMU</Nav.Link>
                               <Nav.Link as={Link} to="/pemesanana" >DATA KONFIRMASI</Nav.Link>
                               <Nav.Link  as={Link} to="/usera" >REKAP KEHADIRAN</Nav.Link>
                                <Nav.Link as={Link} to="" onClick={this.logout} >LOGOUT</Nav.Link>
                        </Nav>  
                    </Navbar.Collapse>
                    
                </Navbar>
            </div>
        )
    }
}

export default NavbarA