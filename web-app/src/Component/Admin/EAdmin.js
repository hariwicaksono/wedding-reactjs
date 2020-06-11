import React, { Component } from 'react'
import NavbarA from './NavbarA'
import API from '../../ServiceApi/Index'
import { NotificationManager } from 'react-notifications'
import {Container, Row, Col, Card} from 'react-bootstrap'

class EAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            nama: '',
            username: '',
            password: '',
            email: '',
            foto: '',
            fotos: '',
            file: {
                fto: ''
            }
        }
    }
    componentDidMount = () => {
        const id = this.props.match.params.id
        API.GetAdminId(id).then(res => {
            this.setState({
                id: res.id_admin,
                nama: res.nama_admin,
                username: res.username_admin,
                password: res.password_admin,
                email: res.email_admin,
                foto: res.foto_admin
            })
        })
    }

    dataHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    imgHandler = (e) => {
        this.setState({
            foto: e.target.files[0].name,
            fotos: e.target.files[0].name,
            file: {
                fto: e.target.files[0]
            }
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        //console.log(this.state)
        if (this.state.fotos === "") {
            API.PutAdmin(this.state).then(res => {
                console.log(res)
                if (res.status === 1) {
                    this.props.history.push('/admin')
                } 
            })
            NotificationManager.success('Berhasil mengubah data profil anda', 'Update');
            
        } else {
            console.log('ada')
            API.PostImageP(this.state.file.fto, this.state.file.fto.name).then(res => {
                console.log(res)
            }) 
            API.PutAdmin(this.state).then(res => {
                if (res.status === 1) {
                    this.props.history.push('/admin')
                }
            })
            NotificationManager.success('Berhasil mengubah data profil anda', 'Update');

        }
        
    }
 
    render() {
        return (
            <div>
                <NavbarA />
                
                <Container>
                    <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                    <Card>
                            <Card.Body>
                        <h3>Edit Profil</h3>
                        <hr />
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <form onSubmit={this.submitHandler}>
                                    <div className="form-group">
                                        <label>NAMA ADMIN</label>
                                        <input value={this.state.nama} name="nama" className="form-control" type="text" onChange={this.dataHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>USERNAME</label>
                                        <input value={this.state.username} name="username" className="form-control" type="text" onChange={this.dataHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>EMAIL</label>
                                        <input value={this.state.email} name="email" className="form-control" type="text" onChange={this.dataHandler} ></input>
                                    </div>
                                    <div className="form-group">
                                        <input name="fotos" className="form-control" type="file" onChange={this.imgHandler} ></input>
                                    </div>
                                    <input value="SIMPAN" className="btn btn-info" type="submit" ></input>
                                </form>
                            </div>
                        </div>
                        </Card.Body>
                        </Card>
                    </Col>
                    </Row>
                </Container>
               
            </div>
        )
    }
}

export default EAdmin