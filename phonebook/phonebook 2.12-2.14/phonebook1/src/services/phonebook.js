import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll=()=>
{
  const req=axios.get(baseUrl)
  return req.then(res=>res.data)
  // return axios.get(baseUrl)
}

const create=(newPerson)=>{
  const req= axios.post(baseUrl,newPerson)
  return req.then(res=>res.data)
  // return axios.post(baseUrl,newPerson)
}

const dlt=(id)=>{
  const url=`${baseUrl}/${id}`
  console.log(url)
  return axios.delete(url)
}

export default {getAll,create,dlt};