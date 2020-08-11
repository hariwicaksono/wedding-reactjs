import React, { Component } from 'react'
import { Container} from 'react-bootstrap';

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
                
        <div className="mx-auto text-center" style={{marginTop: '-5px'}} >
        <h1 className="text-center mb-0" style={{fontWeight:'600'}}>{res.nama_web}</h1>
        <h1 className="text-center display-2 mb-0" style={{lineHeight: '45px',fontWeight:'700'}}>{res.nama_pengantin}</h1>
        <h5 className="text-center mt-2 mb-0"><strong>{res.tempat_tanggal}</strong></h5>
        <img className="img-fluid mt-3 mb-3" width="600" src={this.state.url+res.foto} alt='' style={{border: '28px solid transparent',WebkitBorderImage: "url('border-image-6.svg') 30 35 stretch"}}/>
        <h6><strong>{res.alamat}</strong></h6>
        </div>

                
                
        </div>
        ))
        return (
            <>
                <Container>
                    {ListPengaturan}
                </Container>   
            </>
        )
    }
}

export default Pengaturan