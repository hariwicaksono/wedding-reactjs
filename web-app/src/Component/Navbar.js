import React,{Component} from 'react'
import {Link,Redirect} from 'react-router-dom'
import API from '../ServiceApi/Index'
import {Navbar, Nav, Button, Form, FormControl, NavDropdown} from 'react-bootstrap'
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


  
<Navbar className="shadow mb-5" variant="dark" expand="lg" style={{backgroundColor:"#B68364"}}>
<Navbar.Brand as={Link} to="/">Wedding CI+ReactJs</Navbar.Brand>
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
  </Navbar.Collapse>
</Navbar>
                  
                  
              {this.state.results.length > 0 ? (
                 
                   <SearchResults data={this.state.results} />
                  
              ): (
                   <div className="col-md-6 offset-md-3">
                
                        <img className="img-fluid" width="550" src='photo.jpg' alt='' style={{border: '28px solid transparent',WebkitBorderImage: "url('border-image-6.svg') 30 35 stretch"}}/>
                   </div>

                    
              )}
        </div>
        )
    }
}

export default Navigationbar