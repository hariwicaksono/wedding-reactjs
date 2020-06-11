import React, { Component } from 'react'
import NavbarA from './NavbarA'
import { Link } from 'react-router-dom'
import API from '../../ServiceApi/Index'
import DOrangA from './DOrangA'
import {Container} from 'react-bootstrap'
//import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import ContentLoader from '../ContentLoader'


class OrangA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orang: [],
            loading: true
        }
    }

    hapus = (data) => {
        if (window.confirm('Hapus Akun..??')) {
            API.DeleteOrang(data).then(res => {
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
        
        setTimeout(() => { 
            this.getHandler()
            this.setState({
                loading: false
            })

        }, 1000);
    }

    render() {
        return (  
        <div>
        <NavbarA />
            <div className="bg-white mx-3 px-2 py-4">
              
                <Container fluid>
                    <h2 className="mb-3">Data Tamu Undangan <Link className="btn btn-primary float-right" to="/tproduk" >Tambah Orang</Link></h2>
        
                    {
                this.state.loading
                ? 
                <ContentLoader />
                :
                    <DOrangA pageSize={10} pageCount={this.state.orang.length} currentPage={0} data={this.state.orang} remove={this.hapus} />
                } 
                </Container>
                <br/><br/>
            </div>
        </div> 
        )
    }
}

export default OrangA