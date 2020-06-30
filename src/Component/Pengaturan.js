import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Container,Card, CardDeck } from 'react-bootstrap';

class Pengaturan extends Component {
    constructor(props){
        super(props)
        this.state={
            url : 'http://localhost/wedding-server/assets/images/'
        }
    }
    render() {
        const ListPengaturan = this.props.data.map(res => (
            <div key={res.id} >
                
                <div className="mx-auto text-center">
        <h2 className="text-center mb-0"><strong>{res.nama_web}</strong></h2>
        <h1 className="text-center mb-0">{res.nama_pengantin}</h1>
        <h6 className="text-center mb-0">{res.tempat_tanggal}</h6>
                        <img className="img-fluid mt-3 mb-3" width="600" src={this.state.url+res.foto} alt='' style={{border: '28px solid transparent',WebkitBorderImage: "url('border-image-6.svg') 30 35 stretch"}}/>
        <h6><strong>{res.alamat}</strong></h6>
                   </div>

                
                
            </div>
        ))
        return (
            <div>
                <Container>
               
                    {ListPengaturan}
                </Container>   
               
            </div>
        )
    }
}

export default Pengaturan