import React, { Component } from 'react'
import Navbar from './Navbar'
import Appbar from './Appbar'
//import API from '../ServiceApi/Index'
//import Produk from './Produk'
//import axios from 'axios'
//import Suggestions from './Suggestions'
//import Pagination from 'react-js-pagination'

//const API_URL = 'http://localhost/api_olsop_fix/server/api/SearchController'
class Home extends Component {

    //constructor(props) {
       // super(props)
       // this.state = {
            //Produk: [],
           //activePage : 0
       // }
 //  }

    // handlerChange = (pageNumber) =>{
    //     console.log(pageNumber)
    //     this.setState({activePage:pageNumber})
    // }

   // componentDidMount = () => {
       // API.GetProduk().then(res => {
            //this.setState({
             //   Produk: res
           //})
      //  })
  //  }


  //componentDidMount = () => {

    //const data = this.state.query
   //API.CariProduk(data).then(res => {
   
        //this.setState({
          //  results: res
     //  })
   // })
//}
 
    //getInfo = () => {
        //axios.get(`${API_URL}?id=${this.state.query}`)
         // .then(({ data }) => {
           // this.setState({
                //results: data.data                
            //})
         // })
     // }
      //handleInputChange = () => {
      //  this.setState({
         // query: this.search.value
        //}, () => {
          //if (this.state.query && this.state.query.length >= 1) {
           // if (this.state.query.length % 1 === 0) {
           //   this.componentDidMount()
           // }
          //} else if (!this.state.query) {
            
          //}
       // })
      //}
    render() {
        return (
            <div>
               
               <Navbar />

     {/* <Produk data={this.state.Produk}/>*/}
                   
                {/* <Pagination
                    activePage = {this.state.activePage}
                    itemsCountPerPage = {4}
                    totalItemsCount ={10}
                    pageRangeDisplayed = {3}
                    onChange = {this.handlerChange}
                /> */}
<Appbar/>
            </div>
        )
    }
}

export default Home