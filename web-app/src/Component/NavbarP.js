import React,{Component} from 'react'
import {Link,Redirect,NavLink} from 'react-router-dom'
import {Navbar, Nav, NavItem} from 'react-bootstrap'


class Navigationbar extends Component{
  constructor(props) {
    super(props)
    this.state = {
        
      }
      
    }
   

    render(){
     
        if (sessionStorage.getItem('isLogin')) {
            return(<Redirect to="/user" />)
        }
        if (sessionStorage.getItem('isAdmin')) {
            return(<Redirect to="/admin" />)
        }
        
        return(
       <div>


  
<Navbar className="shadow mb-5" variant="dark" expand="lg" style={{backgroundColor:"#B68364"}}>
<Navbar.Brand as={Link} to="/">Wedding Disfo (CI+ReactJS)</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />

<Navbar.Collapse id="basic-navbar-nav">
<Nav className="ml-auto">

<NavItem className="navItem">
  <NavLink className="btn btn-dark" to="/login">Login</NavLink>
</NavItem>

  </Nav>
    
  </Navbar.Collapse>
</Navbar>
                  
                  
             
        </div>
        )
    }
}

export default Navigationbar