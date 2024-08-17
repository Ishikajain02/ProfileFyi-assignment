/*import React from 'react'
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
    <nav className='w-screen h-28 bg-blue-500 flex  items-center p-4  text-white justify-center'>
     

     {/*   <h2>{price}</h2>
        <h2>{discount}</h2>*
        <div className='flex items-center justify-center'>
        <img src={img1} className='w-16 h-16 md:w-12 md:h-12 ml-42 xl:p-2 p-1 xl:m-2 m-1 '></img>
        <input className='border border-white p-2 md:p-1 m-2 md:m-1 w-96 md:w-32  h-12'></input>
        <button className='bg-white h-12 w-20 md:w-16 p-2 md:m-2 m-1 md::p-1 text-blue-500 font-bold text-lg xl:text-xl'>Login</button>
        <div className='flex p-2 m-2'>
        <Link to="/cart">  <FontAwesomeIcon icon={faCartShopping} className= 'md:w-10 w-24 h-16' style={{color: "#ffffff"}}/></Link> 
        <h1 className='font-bold text-2xl md:text-lg'>{show} items</h1>
        </div>
        </div>
    </nav>
  )
}

export default Nav*/
import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import img1 from '../assets/p6t34f0a9cbova3jns69pgr2sv.png';

const Nav = () => {
    const show = useSelector((store) => store.cart.value);

    return (
        <nav className='w-full h-28 bg-blue-500 flex flex-wrap items-center p-4 text-white justify-between md:justify-center overflow-hidden'>
            <div className='flex items-center flex-shrink-0'>
                <img src={img1} className='w-16 h-16 md:w-12 md:h-12 p-2 m-2' alt="Logo" />
            </div>
          { /* <div className='flex items-center flex-grow justify-center'>
                <input
                    className='border border-white p-2 m-2 xl:w-96 lg:w-72 md:w-42 2xl:w-96 h-12 w-24 md:h-10 md:ml-2 md:p-1'
                    placeholder="Search"
                />
            </div>*/}
            <div className='flex items-center'>
                <button className='bg-white h-12 md:h-10 w-20 md:w-16 p-2 m-2 text-blue-500 font-bold text-lg md:text-sm'>
                    Login
                </button>
                <div className='flex items-center p-2 m-2'>
                    <Link to="/cart">
                        <FontAwesomeIcon
                            icon={faCartShopping}
                            className='w-10 h-10 md:w-8 md:h-8'
                            style={{ color: "#ffffff" }}
                        />
                    </Link>
                    <h1 className='font-bold text-2xl md:text-lg ml-2'>
                        {show} items
                    </h1>
                </div>
            </div>
        </nav>
    );
}

export default Nav;

