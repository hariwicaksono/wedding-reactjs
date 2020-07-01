import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import API from '../ServiceApi/Index'
import Loader from 'react-loader'
import SearchResults from './SearchResults'
import Pengaturan from './Pengaturan'
import {Navbar, Nav, NavItem, Button, Form, FormControl} from 'react-bootstrap'
import {ThreeDotsVertical, BoxArrowInRight, Search} from 'react-bootstrap-icons'
//import { NotificationManager } from 'react-notifications'
 
var options = {
  lines: 13,
  length: 20,
  width: 10,
  radius: 30,
  scale: 0.35,
  corners: 1,
  color: '#fff',
  opacity: 0.25,
  rotate: 0,
  direction: 1,
  speed: 1,
  trail: 60,
  fps: 20,
  zIndex: 2e9,
  top: '50%',
  left: '50%',
  shadow: false,
  hwaccel: false,
  position: 'absolute'
};
class Navigationbar extends Component{
  constructor(props) {
    super(props)
    this.state = {
        query: '',
        results: [],
        Pengaturan: [],
        loading: true
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
        setTimeout(() => this.setState({
              Pengaturan: res,
              loading: false
         }), 100);
      })
 }
     
handlerSubmit = (event) => {
  event.preventDefault()
  //console.log(event)
  const query=this.state.query
  API.CariOrang(query).then(res=>{
    setTimeout(() =>this.setState({
        results: res,
        loading: false
      }), 100);
    
  })
}

  render(){
    
        
        return(
       <div>

        <Navbar className="shadow mb-3" variant="dark" expand="lg" style={{backgroundColor:"#B68364",height:"60px"}}>
        <Navbar.Brand href="/" alt=""><ThreeDotsVertical size="34"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
            
          <Form onSubmit={this.handlerSubmit} inline>
            <FormControl 
            type="text" 
            name="query" 
            ref={input => this.search = input}
            onChange={this.handlerChange} 
            placeholder="Scan QR Code..." 
            className="mr-sm-2" required autoFocus={true} />
            <Button type="submit" variant="warning"><Search size="18"/></Button>
          </Form>

            
          <Nav className="ml-auto">

        <NavItem className="navItem">
          <NavLink className="btn btn-primary" to="/login"><BoxArrowInRight size="18"/> Login</NavLink>
        </NavItem>

        </Nav>

        </Navbar.Collapse>
        </Navbar>
                  
                  
        {this.state.results.length > 0 ? (
            
            (this.state.loading
            ?
            <Loader options={options} className="spinner" />
            :
              <SearchResults data={this.state.results} />
            )
            
        ): (

          (this.state.loading
            ?
            <Loader options={options} className="spinner" />
            :
            
            <Pengaturan data={this.state.Pengaturan} />
            
          )
              
        )}
        </div>
        )
    }
}

export default Navigationbar