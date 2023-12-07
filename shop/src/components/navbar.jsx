import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import {ShoppingCart, PlusCircle} from 'phosphor-react'
export const Navbar = () => {
  
  return (
    <div className='navbar'>
      <div className='links'>
        <Link to="/">Shop</Link>
        <Link to="/cart">
            <ShoppingCart size={32} />
        </Link>
        <Link to ="/create" >
          <PlusCircle size = {32}/>
        </Link>
        <Link to="/update">
          Update
        </Link>
        
      </div>
    </div>
  );
}

