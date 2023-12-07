import React from 'react'

const UpdateUser = () => {
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className="w-50 bg-white rounded p-3">
        <form>
          <h2>Update user</h2>
          <div className="mb-2">
            <label htmlFor="">Product Name</label>
            <input type="text" placeholder='Enter product name' className='form-control' />
          </div>
          <div className="mb-2">
            <label htmlFor="">Price</label>
            <input type="number" placeholder='Enter price'className='form-control' />
          </div>
          <div className='mb-2'>
            <label htmlFor="">upload product image</label>
            <input type="file" id="img" name="img" accept="image/*" placeholder='upload image'className='form-control'/>
          </div>
          <button className='btn btn-success'>Update</button>
        </form>
      </div>

    </div>
  )
}

export default UpdateUser;
