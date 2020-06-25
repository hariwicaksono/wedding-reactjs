import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Table} from 'react-bootstrap'
import {Pencil, Trash, Eye} from 'react-bootstrap-icons'
import ReactPaginate from 'react-paginate'

class DOrangA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
          currentPage: props.currentPage
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
      }
      handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            //this.receivedData()
        });

    };
    
    render() {
        const { pageSize, pageCount, data } = this.props;
        const { currentPage } = this.state.currentPage;
        const {offset} = this.state.offset;
    
        const paginatedData = data.slice(offset, offset + pageSize);

        const lisOrang = paginatedData.map(data => (
            <tbody key={data.id} >
                <tr>
        <td> {data.id}</td>
                    <td> {data.nama} </td>
                    <td> {data.link} </td>
                    <td> {data.qr_code} </td>
                    <td>
                        <Link to={'/detailpa/' + data.id} className="btn btn-info btn-sm"><Eye size={18} /></Link>&nbsp;
                        <Link to={"/editpa/" + data.id} className="btn btn-warning btn-sm"><Pencil size={18} /></Link>&nbsp;
                        <Link to="" onClick={()=>this.props.remove(data.id)} className="btn btn-danger btn-sm"><Trash size={18} /></Link>
                    </td>
                </tr>
            </tbody>
            
        ))
       
        return (
            <div>
              <div className="float-right">

              <ReactPaginate
                containerClassName="pagination"
                breakClassName="page-item"
                breakLabel={<a className="page-link">...</a>}
                pageClassName="page-item"
                previousClassName="page-item"
                nextClassName="page-item"
                pageLinkClassName="page-link"
                previousLinkClassName="page-link"
                nextLinkClassName="page-link"
                activeClassName="active"
                pageCount={pageCount}
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
                            <th>FOTO</th>
                            <th>AKSI</th>
                        </tr>
                    </thead>
                    
                    {lisOrang}
                    
                </Table>

            </div>
        )
    }
}

export default DOrangA