import React, { Component } from 'react'
import NavbarA from './NavbarA'
import { Link } from 'react-router-dom'
import API from '../../ServiceApi/Index'
import {Container, Table, Modal, Button} from 'react-bootstrap'
import {Pencil, Trash, Eye} from 'react-bootstrap-icons'
import ReactPaginate from 'react-paginate'
//import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import ContentLoader from '../ContentLoader'


class DataTamuA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            offset: 0,
            data: [],
            perPage: 10,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
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

            const data = res;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(data => (
            <tbody key={data.id} >
                <tr>
                    <td> {data.id}</td>
                    <td> <Link to={'/detailtamu/' + data.id}>{data.nama}</Link> </td>
                <td> <a href={data.link} alt={'link'+data.nama} target="_blank" rel="noopener noreferrer">{data.link}</a></td>
                    <td align="center"> <img src={'qrcode/'+data.qr_code} width="30" alt={data.qr_code} /> </td>
                    <td>
                        <Link to={'/detailtamu/' + data.id} className="btn btn-info btn-sm"><Eye size={18} /></Link>&nbsp;
                        <Link to={"/editpa/" + data.id} className="btn btn-warning btn-sm"><Pencil size={18} /></Link>&nbsp;
                        <Link to="" onClick={()=>this.props.remove(data.id)} className="btn btn-danger btn-sm"><Trash size={18} /></Link>
                    </td>
                </tr>
            </tbody>
                ))

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                   
                    postData
                })

        })
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.getHandler()
        });

    };

    componentDidMount = () => {
          this.getHandler()
    }

    render() {
       
        return (  
        <div>
        <NavbarA />
            <div className="bg-white mx-3 px-2 py-4">
              
                <Container fluid>
                    <h2 className="mb-3">Data Tamu Undangan <Link className="btn btn-primary float-right" to="/tproduk" >Tambah Tamu</Link></h2>
              
                <div className="float-right">

              <ReactPaginate
                containerClassName="pagination"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                pageClassName="page-item"
                previousClassName="page-item"
                nextClassName="page-item"
                pageLinkClassName="page-link"
                previousLinkClassName="page-link"
                nextLinkClassName="page-link"
                activeClassName="active"
                pageCount={this.state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={this.handlePageClick}
                
                />
              </div>

              <Table bordered hover responsive size="sm">
                    <thead>
                        <tr>
                        <th>ID</th>
                            <th>NAMA</th>
                            <th>LINK</th>
                            <th>QR CODE</th>
                            <th>AKSI</th>
                        </tr>
                    </thead>
                    
                    {this.state.postData} 
                    
                </Table>
                


                </Container>
                <br/><br/>
            </div>
        </div> 
        )
    }
}

export default DataTamuA