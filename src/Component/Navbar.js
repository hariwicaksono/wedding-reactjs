import React,{Component} from 'react'
import {Link,Redirect,NavLink} from 'react-router-dom'
import API from '../ServiceApi/Index'
import {Navbar, Nav, NavItem, Button, Form, FormControl} from 'react-bootstrap'
import SearchResults from './SearchResults'
import { NotificationManager } from 'react-notifications'

class Navigationbar extends Component{
  constructor(props) {
    super(props)
    this.state = {
        query: '',
        results: []
      }
      this.handlerChange = this.handlerChange.bind(this)
        this.handlerSubmit = this.handlerSubmit.bind(this)
    }
    handlerChange = (event) => {
      this.setState({
          [event.target.name] : event.target.value
      })
    }

     
handlerSubmit = (event) => {
  event.preventDefault()
  //console.log(event)
  const query=this.state.query
  API.CariOrang(query).then(res=>{
      this.setState({
        results: res
      })
    
  })
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


  
<Navbar className="shadow mb-3" variant="dark" expand="lg" style={{backgroundColor:"#B68364"}}>
<Navbar.Brand as={Link} to="/">Wedding Disfo (CI+ReactJS)</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />

<Navbar.Collapse id="basic-navbar-nav">
    
    <Form onSubmit={this.handlerSubmit} inline>
      <FormControl 
      type="text" 
      name="query" 
      ref={input => this.search = input}
      onChange={this.handlerChange} 
      placeholder="Search" 
      className="mr-sm-2" required autoFocus={true} />
      <Button type="submit" variant="warning">Search</Button>
    </Form>

    
  <Nav className="ml-auto">

<NavItem className="navItem">
  <NavLink className="btn btn-dark" to="/login">Login</NavLink>
</NavItem>

  </Nav>

  </Navbar.Collapse>


</Navbar>
                  
                  
              {this.state.results.length > 0 ? (
                 
                   <SearchResults data={this.state.results} />
                  
              ): (
                   <div className="mx-auto text-center">
                  <h2 className="text-center mb-0" style={{fontSize:"40px"}}><strong>The Wedding</strong></h2>
                  <h1 className="text-center mb-0" style={{fontSize:"50px"}}>Raffi &amp; Ayu</h1>
                        <img className="img-fluid" width="600" src='photo.jpg' alt='' style={{border: '28px solid transparent',WebkitBorderImage: "url('border-image-6.svg') 30 35 stretch"}}/>
                    <h6><strong>Purwokerto, 24 Desember 2018. Hotel Aston Purwokerto, Jl. Overste Isdiman No.33, Glempang, Bancarkembar, Kec. Purwokerto Utara, Kab. Banyumas, Jawa Tengah 53114</strong></h6>
                   </div>

                    
              )}
        </div>
        )
    }
}

export default Navigationbar