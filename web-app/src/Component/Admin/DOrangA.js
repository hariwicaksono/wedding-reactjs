import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class DOrangA extends Component {
    render() {
        const lisOrang = this.props.data.map(data => (
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