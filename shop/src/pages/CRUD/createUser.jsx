import React,{useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
export const CreateUser = () => {
  const [name, setName] = useState()
  const [price, setPrice] = useState()
  const [image, setImage] = useState()
  const navigate = useNavigate()
  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/createUser",{name, price,image})
    .then(result => {
      console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err))
  }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>Add user</h2>
          <div className="mb-2">
            <label htmlFor="">Product Name</label>
            <input type="text" placeholder='Enter product name' className='form-control' 
            onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className="mb-2">
            <label htmlFor="">Price</label>
            <input type="number" placeholder='Enter price'className='form-control' 
            onChange={(e)=>setPrice(e.target.value)}/>
          </div>
          <div className='mb-2'>
            <label htmlFor="">upload product image</label>
            <input type="file" id="img" name="img" accept="image/*" placeholder='upload image'className='form-control'
            onChange={(e)=>setImage(e.target.value)}/>
          </div>
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>

    </div>
  )
}
