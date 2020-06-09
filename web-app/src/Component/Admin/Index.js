import React, { Component } from 'react'
import NavbarA from './NavbarA'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import API from '../../ServiceApi/Index'
import {Container, CardDeck, Card} from 'react-bootstrap'

class Index extends Component {
    constructor(props){
        super(props)
        this.state = {
            id : '',
            nama : '',
            username :'',
            email : '',
            foto :'',
            loading: true
        }
    } 
    componentDidMount = () => {
        const data = JSON.parse(sessionStorage.getItem('isAdmin'))
        setTimeout(() => { this.setState({
            id : data[0].id_admin,
            loading: false
        }) }, 1000);
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
        return (
            <div>
                <NavbarA />
                {
                this.state.loading
                ? 
                <div className="container">
                <div className="col-md-4"></div>
                <div className="col-md-4">
               
                </div>
                </div>
                :
                <div className="bg-white mx-3 px-2 py-4">
            <Container>
                <CardDeck>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                </CardDeck>
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h1>ADMIN AKUN</h1>
                        <hr />
                        <div className="panel panel-default">
                            <div className="panel-body">
                                    <div className="form-group">
                                        <label> NAMA </label>
                                        <br />
                                        <label><b> {this.state.nama} </b></label>
                                    </div>
                                    <div className="form-group">
                                        <label> USERNAME </label>
                                        <br />
                                        <label><b> {this.state.username} </b></label>
                                    </div>
                                    <div className="form-group">
                                        <label> EMAIL </label>
                                        <br />
                                        <label><b> {this.state.email} </b></label>
                                    </div>
                                    <div className="form-group">
                                        <label> FOTO </label>
                                        <br />
                                        <p><img src={'http://localhost/api_olsop_fix/server/asset/img/' + this.state.foto} width="50" height="50" alt="test" /></p>
                                    </div>
                                    <br/><hr/>
                                    <Link to={'/editadmin/'+this.state.id} className="btn btn-danger">EDIT AKUN</Link>
                            </div>
                        </div>
                    </div>
                    </Container>
                </div>

            }
            </div>
        )
    }
}


export default Index