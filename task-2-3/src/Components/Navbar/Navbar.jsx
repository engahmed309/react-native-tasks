import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import style from './Navbar.module.css';
import { Link, NavLink } from 'react-router-dom';


export default function Navbar() {
    const [counter,setCounter]=useState(0);
    useEffect(()=>{},[]);
  return  <>
 <nav className='bg-white shadow-2xl p-2'>
  <div className="logo">
  <Link to={''}><h1>Dinova</h1></Link>
  </div>

 <ul className="menu">
  <li>
   <NavLink to={''}>Home</NavLink>
  </li>
  <li>
     <NavLink to={''}>Cart</NavLink>
  </li>
  <li>
     <NavLink to={''}>Products</NavLink>
  </li>
  <li>
     <NavLink to={''}>Categories</NavLink>
  </li>
  <li>
     <NavLink to={''}>Brands</NavLink>
  </li>
 </ul>

<ul className="icons-ecommerec">
  <li><i class="fa-solid fa-magnifying-glass"></i></li>
  <li><i class="fa-regular fa-heart"></i></li>
  <li><i class="fa-solid fa-cart-shopping"></i></li>
  <li><i class="fa-solid fa-user"></i></li>

</ul>

 </nav>
  </>
}
