import React, { Component } from 'react'
import NavbarA from './NavbarA'
import { Link } from 'react-router-dom'
import API from '../../ServiceApi/Index'
import DOrangA from './DOrangA'
import {Container} from 'react-bootstrap'
//import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class OrangA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orang: []
        }
    }

   

    hapus = (data) => {
        if (window.confirm('Hapus Akun..??')) {
            API.DeleteProduk(data).then(res => {
                if (res === 1) {
                    this.getHandler()
                } else {
                    console.log('gagal')
                }
            })
        }
    }

    getHandler = () => {
        API.GetOrang().then(res => {
            this.setState({
                orang: res
            })
        })
    }

    componentDidMount = () => {
        this.getHandler()
    }

    render() {
        return ( 
        <div>
        <NavbarA />
            <div className="bg-white mx-3">
              
                <Container className="my-3 px-3 py-4" fluid>
                    <h2 className="mb-3">DATA TAMU UNDANGAN <Link className="btn btn-info btn-sm float-right" to="/tproduk" >TAMBAH ORANG</Link></h2>
                    
                    <DOrangA pageSize={5} pageCount={this.state.orang.length} currentPage={0} data={this.state.orang} remove={this.hapus} />
                    
                </Container>
            </div>
        </div> 
        )
    }
}

export default OrangA