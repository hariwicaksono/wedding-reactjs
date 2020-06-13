import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
import { NotificationManager } from 'react-notifications'
import API from '../../ServiceApi/Index'
import {Navbar, Nav, NavDropdown, NavItem, Button, Form, FormControl} from 'react-bootstrap'
import {BoxArrowRight, Person} from 'react-bootstrap-icons'

class NavbarA extends Component {
    constructor(props){
        super(props)
        this.state = {
            id : '',
            nama : '',
            username :'',
            email : '',
            foto :'',
            fotoUrl:'http://localhost/wedding-reactjs/server/asset/img/',
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
        const data = JSON.parse(sessionStorage.getItem('isAdmin'))

        this.setState({
            id : data[0].id_admin
        });
        API.GetAdminId(this.state.id).then(res=>{
            this.setState({
                nama : res.nama_admin,
                username : res.username_admin,
                email : res.email_admin,
                foto : res.foto_admin
            })
        })
    }

    render() {
        if (this.state.login) {
            return( <Redirect to='/login' /> )
        }
        const element = <img src={this.state.fotoUrl+this.state.foto} width="20" height="20" alt="test" />;
        return (
            
        <Navbar className="shadow mb-3" bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand as={Link} to="/">Wedding Disfo (CI+ReactJS)</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link as={Link} to="/admin" >Home</Nav.Link>
                <Nav.Link as={Link} to="/dataorang" >Data Tamu</Nav.Link>
                <Nav.Link as={Link} to="/pemesanana" >Data Konfirmasi</Nav.Link>
                <Nav.Link  as={Link} to="/usera" >Rekap Kehadiran</Nav.Link>
        <NavDropdown title={this.state.nama} id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to={'/editadmin/'+this.state.id}>Ganti Profil</NavDropdown.Item>
       
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to="" onClick={this.logout}><BoxArrowRight/> Logout</NavDropdown.Item>
      </NavDropdown>

                        </Nav>  
                    </Navbar.Collapse>
                    
                </Navbar>
           
        )
    }
}

export default NavbarA