import Axios from 'axios'

const RoothPath = "http://localhost/wedding-server/api/"

const GET = (path) => {
    const promise = new Promise((resolve,reject)=>{
        Axios.get(RoothPath+path).then(res=>{
            resolve(res.data.data)
        },err=>{
            reject(err)
        })
    })
    return promise
}

const GET_ID = (path,id) => {
    const promise = new Promise((resolve,reject)=>{
        Axios.get(RoothPath+path+id).then(res=>{
            resolve(res.data.data[0])
        },err=>{
            reject(err)
        })
    })
    return promise
}


const LOGIN = (path,data) => {
    const promise = new Promise((resolve,reject)=>{
        Axios.post(RoothPath+path,data).then(res=>{
            resolve(res.data)
        },err=>{
            reject(err)
        })
    })
    return promise
}

const POSTUSER = (path,data) =>{
   const promise = new Promise((resolve,reject)=>{
        Axios.post(RoothPath+path,data).then(res=>{
            resolve(res.data)
        },err=>{
            reject(err)
        })
   })
   return promise
}

const POSTPESAN = (path,data) =>{
    const promise = new Promise((resolve,reject)=>{
         Axios.post(RoothPath+path,data).then(res=>{
             resolve(res.data)
         },err=>{
             reject(err)
         })
    })
    return promise
 }

 const PUTPRODUK = (path,data) =>{
    const promise = new Promise((resolve,reject)=>{
         Axios.put(RoothPath+path,data).then(res=>{
             resolve(res.data)
         },err=>{
             reject(err)
         })
    })
    return promise
 }

 const Delete = (path,id) => {
    const promise = new Promise((resolve,reject) => {
        Axios.delete(RoothPath+path+id).then(res =>{
            resolve(res.data.status)
        },(err)=>{
            reject(err)
        })
    })
    return promise
}


 const GETPESAN = (path,data) =>{
    const promise = new Promise((resolve,reject)=>{
         Axios.get(RoothPath+path+data).then(res=>{
             resolve(res.data)
         },err=>{
             reject(err)
         })
    })
    return promise
 }

 const POSTIMAGE = (path,data,name) => {
     const promise = new Promise((resolve,reject)=>{
         const formdata = new FormData()
         formdata.append('foto',data,name)
         Axios.post(RoothPath+path,formdata).then(res=>{
            resolve(res.data.status)
        },(err)=>{
            reject(err)
        })
     })
     return promise
 }

 const GET_ID_VAL = (path,data) => {
    const promise = new Promise((resolve,reject) => {
        Axios.get(RoothPath+path+data).then(res => {
            resolve(res.data.data)
        }).catch(er => {
            reject(er)
        })
    })
    return promise
}


 
const GetOrang = () => GET('OrangController')
const GetUser = () => GET('UserController')
const GetAdmin = () => GET('AdminController')
const GetAllPesan = () => GET('PemesananController')
const GetOrangId = (data) => GET_ID('OrangController?id=',data)
const PostLogin = (data) => LOGIN('LoginController',data)
const PostUser = (data) => POSTUSER('UserController',data)
const PostPesan = (data) => POSTPESAN('PemesananController',data)
const GetPesan = (data) => GETPESAN('PemesananController?id=',data)
const PostProduk = (data) => POSTPESAN('ProdukController',data)
const PostAdmin = (data) => POSTPESAN('AdminController',data)
const PostImageP = (data,name) => POSTIMAGE('ImageUpload',data,name)
const PutProduk = (data) => PUTPRODUK('ProdukController',data);
const PutPesan = (data) => PUTPRODUK('PemesananController',data);
const PutAdmin = (data) => PUTPRODUK('AdminController',data);
const PutUser = (data) => PUTPRODUK('UserController',data);
const DeleteOrang = (id) => Delete('OrangController/index_delete?id=',id)
const DeletePemesanan = (id) => Delete('PemesananController/index_delete?id=',id)
const DeleteUser = (id) => Delete('UserController/index_delete?id=',id)
const DeleteAdmin = (id) => Delete('AdminController/index_delete?id=',id)
const GetPesanId = (data) => GET_ID('ImageUpload?id=',data)
const GetUserId = (data) => GET_ID('UserController?id=',data)
const GetAdminId = (data) => GET_ID('AdminController?id=',data)
const CariOrang = (data) => GET_ID_VAL('SearchController?id=',data)
const GetPengaturan = () => GET('PengaturanController')


const API = {
    GetOrang,
    PostLogin,
    PostUser,
    GetOrangId,
    PostPesan,
    GetPesan,
    PostImageP,
    PostProduk,
    PutProduk,
    GetAllPesan,
    DeleteOrang,
    DeleteAdmin,
    DeletePemesanan,
    GetPesanId,
    PutPesan,
    GetUser,
    DeleteUser,
    GetUserId,
    GetAdmin,
    PostAdmin,
    GetAdminId,
    PutAdmin,
    PutUser,
    CariOrang,
    GetPengaturan
}

export default API