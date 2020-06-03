import React, { Component } from 'react'
import NavbarA from './NavbarA'
import { Link } from 'react-router-dom'
import API from '../../ServiceApi/Index'
import DOrangA from './DOrangA'
import {Container} from 'react-bootstrap'
//import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Pagination from 'react-js-pagination'

class OrangA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orang: [],
            filteredUser: [],
            activePage : 1
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

    handlerChange = (pageNumber) =>{
        console.log(pageNumber)
        const filteredUser = this.state.orang;
    let perPage = 5;
    const start = pageNumber === 1 ? 0 : pageNumber*perPage-perPage;
    const end = start + 5;
    console.log(`${start}, ${end}`);
    const result = filteredUser.slice(start, end);

    this.setState({
      activePage: pageNumber,
      filteredUser:result
    });
    }

    render() {

        return ( 
        <div>
        <NavbarA />
            <div className="bg-white mx-3">
              
                <Container className="my-3 px-3 py-4" fluid>
                    <h2 className="mb-3">DATA TAMU UNDANGAN <Link className="btn btn-info btn-sm float-right" to="/tproduk" >TAMBAH ORANG</Link></h2>
                    <Pagination
                        itemClass="page-item"
                        linkClass="page-link"
                        activePage={this.state.activePage}
                        itemsCountPerPage={5}
                        totalItemsCount={this.state.orang.length}
                        pageRangeDisplayed={5}
                        onChange={this.handlerChange.bind(this)}
                    />
                    <DOrangA data={this.state.orang} remove={this.hapus} />
                    
                </Container>
            </div>
        </div> 
        )
    }
}

export default OrangA