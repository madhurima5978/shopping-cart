import React, {useState,useEffect} from 'react'
import './shop.css'
import {PRODUCTS} from '../../products'
import axios from 'axios';
import {Product} from './product';
export const Shop = () => {
  const[users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:3001')
      .then(result => {
        if (Array.isArray(result.data)) {
          setUsers(result.data);
          console.log(result.data);
        } else {
          setError("Data received is not in the expected format (not an array).");
        }
      })
      .catch(err => {
        setError("Error fetching data: " + err);
      });
  }, []);
  
  return (
   
    <div className='shop'>
      <div className='shopTitle'>
        <h1>My Shop</h1>
      </div>
      <div className='products'>
        {PRODUCTS.map((product) => (
        <Product data={product}/>
        ))}
        <ul>
        {users.map(user => (
          
          <li key={user._id}>
            <p>Name: {user.name}</p>
            <p>Price: {user.price}</p>
            <img src={`data:image/jpeg;base64,${user.image}`}/>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};
