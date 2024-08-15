import React from 'react'
import { useSelector } from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import img1 from '../assets/p6t34f0a9cbova3jns69pgr2sv.png'
const Nav = () => {
    const show=useSelector((store)=>store.cart.value);
    const price=useSelector((store)=>store.cart.price);
    const discount=useSelector((store)=>store.cart.discountprice);
  return (
    <div className='w-full h-28 bg-blue-500 flex  items-center p-4 text-white justify-center'>
     

     {/*   <h2>{price}</h2>
        <h2>{discount}</h2>*/}
        <div className='flex items-center'>
        <img src={img1} className='w-16 h-16 ml-42 p-2 m-2'></img>
        <input className='border border-white p-2 m-2 w-96 h-12'></input>
        <button className='bg-white h-12 w-36 p-2 m-2 text-blue-500 font-bold text-xl'>Login</button>
        <div className='flex p-2 m-2'>
        <Link to="/cart">  <FontAwesomeIcon icon={faCartShopping} className= 'w-24 h-16' style={{color: "#ffffff"}}/></Link> 
        <h1>-{show} items</h1>
        </div>
        </div>
    </div>
  )
}

export default Nav