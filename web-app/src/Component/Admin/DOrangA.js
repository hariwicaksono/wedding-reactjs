import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Pagination, PageItem} from 'react-bootstrap'

class DOrangA extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          currentPage: props.currentPage
        };
      }
      handleClick = (e, index) => {
        e.preventDefault();
        console.log(index);
        this.setState({
          currentPage: index
        });
      };
    render() {
        const { pageSize, pageCount, data } = this.props;
        const { currentPage } = this.state;
    
        let pageNumbers = [];
        for (let i = 0; i < pageCount; i++) {
          pageNumbers.push(
            <Pagination.Item key={i} active={currentPage === i ? true : false} onClick={e => this.handleClick(e, i)} href="#">
                {i + 1}
            </Pagination.Item>
          );
        }
        const paginatedData = data.slice(
          currentPage * pageSize,
          (currentPage + 1) * pageSize
        );

        const lisOrang = paginatedData.map(data => (
            <tbody key={data.id} >
                <tr>
                    <td> {data.nama} </td>
                    <td> {data.link} </td>
                    <td> {data.konfirmasi} </td>
                    <td> {data.grup} </td>
                    <td> {data.qr_code} </td>
                    <td>
                        <Link to={'/detailpa/' + data.id} className="btn btn-info btn-sm">DETAIL</Link>
                        <Link to="" onClick={()=>this.props.remove(data.id)} className="btn btn-warning btn-sm">HAPUS</Link>
                        <Link to={"/editpa/" + data.id} className="btn btn-success btn-sm">EDIT</Link>
                    </td>
                </tr>
            </tbody>
        ))
        return (
            <div>
              <Pagination>
               
                    {pageNumbers}
                  
            </Pagination>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>NAMA</th>
                            <th>LINK</th>
                            <th></th>
                            <th>GRUP</th>
                            <th>FOTO</th>
                            <th>AKSI</th>
                        </tr>
                    </thead>
                    {lisOrang}
                </table>
            </div>
        )
    }
}

export default DOrangA