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

const POST = (path,data) =>{
    const promise = new Promise((resolve,reject)=>{
         Axios.post(RoothPath+path,data).then(res=>{
             resolve(res.data)
         },err=>{
             reject(err)
         })
    })
    return promise
 }

const CariOrang = (data) => GET_ID_VAL('SearchController?id=',data)
const GetPengaturan = () => GET('PengaturanController')
const PostHadir = (data) => POST('HadirController',data)

const API = {
    CariOrang,
    GetPengaturan,
    PostHadir
}

export default API