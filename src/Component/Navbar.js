import React,{Component} from 'react'
import {Link,Redirect,NavLink} from 'react-router-dom'
import API from '../ServiceApi/Index'
import {Navbar, Nav, NavItem, Button, Form, FormControl} from 'react-bootstrap'
import {ThreeDotsVertical, BoxArrowInRight} from 'react-bootstrap-icons'
import SearchResults from './SearchResults'
import { NotificationManager } from 'react-notifications'
import Pengaturan from './Pengaturan'

class Navigationbar extends Component{
  constructor(props) {
    super(props)
    this.state = {
        query: '',
        results: [],
        Pengaturan: []
      }
      this.handlerChange = this.handlerChange.bind(this)
        this.handlerSubmit = this.handlerSubmit.bind(this)
    }
    handlerChange = (event) => {
      this.setState({
          [event.target.name] : event.target.value
      })
    }

  componentDidMount = () => {
      API.GetPengaturan().then(res => {
          this.setState({
              Pengaturan: res
         })
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
<Navbar.Brand href="/" alt=""><ThreeDotsVertical /></Navbar.Brand>
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
  <NavLink className="btn btn-primary" to="/login"><BoxArrowInRight/> Login</NavLink>
</NavItem>

  </Nav>

  </Navbar.Collapse>


</Navbar>
                  
                  
              {this.state.results.length > 0 ? (
                 
                   <SearchResults data={this.state.results} />
                  
              ): (

                <Pengaturan data={this.state.Pengaturan} />
                   
                    
              )}
        </div>
        )
    }
}

export default Navigationbar