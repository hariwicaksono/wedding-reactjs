import React, { Component } from 'react'
import NavbarA from './NavbarA'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import API from '../../ServiceApi/Index'
import {Container, CardDeck, Card} from 'react-bootstrap'
import Loader from 'react-loader'
import ContentLoader from '../ContentLoader'

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

        setTimeout(() => { 
            this.setState({
                loading: false
            })

        }, 1000);

        
    }
    render() {
        return (
            <div>
                <NavbarA />

                <div className="bg-white mx-3">
                <Container className="my-3 px-3 py-4" fluid>
                {
                this.state.loading
                ? 
                <ContentLoader />
                :
               
         
                <CardDeck>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    
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
                   
            }
            </Container>
            </div>
            </div>
        )
    }
}


export default Index