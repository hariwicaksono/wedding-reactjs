import React, { Component } from 'react'
import Navbar from './NavbarP'
import {Redirect} from 'react-router-dom'
import API from '../ServiceApi/Index'
import { NotificationManager } from 'react-notifications'
import {Container, Row, Col, Card, FormGroup} from 'react-bootstrap'
import Form from 'react-formal'
import * as yup from 'yup'

const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
    level: yup.string().required(),
  }); 
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            level: "",
            isLogin:false,
            idLogin:"",
            gagalLogin : ""
        }
        this.handlerChange = this.handlerChange.bind(this)
        this.handlerSubmit = this.handlerSubmit.bind(this)
    }

    handlerChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handlerSubmit = () => {
        //event.preventDefault()
        API.PostLogin(this.state).then(res=>{
            if (res.id === "1" ) {
                sessionStorage.setItem('isLogin',JSON.stringify(res.data))
                this.setState({
                    isLogin:true,
                    idLogin:"1"
                }) 
                NotificationManager.success('Berhasil masuk kedalam sistem', 'Login!');
            } else if (res.id === "2" ) {
                sessionStorage.setItem('isAdmin',JSON.stringify(res.data))
                this.setState({
                    isLogin:true,
                    idLogin:"2"
                })
                NotificationManager.success('Berhasil masuk kedalam sistem', 'Login!');
            } else {
                NotificationManager.warning('Login gagal, periksa username dan password anda', 'Perhatian!');
                  
            }
        })
    }

    render() {

        if(this.state.isLogin){
            if (this.state.idLogin === "1") {
                return( <Redirect to="/user" /> )
            } else {
                return(<Redirect to="admin" />)
            }
        }

        return (
            <div>
                <Navbar />

                <Container>
                   <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        
                        <Card>
                            <Card.Body>
                            <h4 className="mb-3">LOGIN</h4>
                                <Form onSubmit={this.handlerSubmit} schema={schema}>
                                    <FormGroup>
                                        <label>Username</label>
                                        <Form.Field type="text" name="username" className="form-control" onChange={this.handlerChange} />
                                        <Form.Message for="username" className="error" />
                                    </FormGroup>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <Form.Field type="password" name="password" className="form-control" onChange={this.handlerChange} />
                                        <Form.Message for="password" className="error" />
                                    </div>
                                    <div className="form-group">
                                        <Form.Field as="select" name="level" className="form-control" onChange={this.handlerChange}>
                                            <option>Pilih Level</option>
                                            <option>ADMIN</option>
                                            <option>USER</option>

                                        </Form.Field>
                                        <Form.Message for="level" className="error" />
                                    </div>
                                    <Form.Submit type="submit" className="btn btn-primary btn-block">Login</Form.Submit>
                                </Form>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Login