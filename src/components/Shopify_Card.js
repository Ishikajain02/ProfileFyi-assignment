/*import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add ,del} from '../utils/cartSlice';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faMinus , faPlus} from '@fortawesome/free-solid-svg-icons'
const Shopify_Card = (props) => {
    const  {title,description,images,price,id}=props;
    const dispatch = useDispatch();
    const cartItem = useSelector((store) => store.cart.items.find(item => item.id === id));

    // If the item is in the cart, use its quantity, otherwise default to 1
    const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div >
    
   
    <div className=' w-[1150px] h-[650px] lg:h-[200px]  lg:w-[750px] rounded-xl shadow-2xl border-black flex justify-between  flex-row xl:flex-row items-center  p-4 m-10'>
      <div className='flex flex-row lg:flex-row items-center'>
        <img className="w-80 h-[350px] flex rounded-xl p-2 m-4 lg:h-[200px] "src={images[0]}/>
    <h1 className='text-2xl font-bold p-2 m-2 '>{title}</h1>
    </div>
    <h1 className='text-xl items flex p-2 m-2 font-semibold '>${price}</h1>
    <div className='flex items-center'>
    <button className=' p-4 m-2 border border-black'onClick={()=>dispatch(add({...props}))}><FontAwesomeIcon icon={faPlus} /></button>
    <h1 className='p-4 m-2 font-bold text-2xl'>{quantity>1?quantity:0}</h1>
    <button className='p-4 m-2 border border-black' onClick={()=>dispatch(del({...props}))}><FontAwesomeIcon icon={faMinus} /></button> 
    </div>
    </div>
    </div>
  )
}

export default Shopify_Card*/
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, del } from '../utils/cartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const Shopify_Card = (props) => {
    const { title, description, images, price, id } = props;
    const dispatch = useDispatch();
    const cartItem = useSelector((store) => store.cart.items.find(item => item.id === id));

    // If the item is in the cart, use its quantity, otherwise default to 0
    const quantity = cartItem ? cartItem.quantity : 0;
  
  
  
    return (
      <div className='w-[350px] h-[550px] md:w-[150px] sm:w-[100px] md:h-[450px] sm:h-[350px] rounded-xl shadow-2xl border-black flex justify-center flex-col items-center p-4 m-10 sm:p-1 md:p-2 sm:m-2 md:m-4 '>
      <img className="w-80 h-[350px] md:w-62 md:h-[250px] sm:w-42 md:w-52 flex rounded-xl p-2 m-4" src={images[0]} alt={title} />
      <h1 className=' sm:text-lg text-2xl font-bold'>{title}</h1>
      <h1 className='sm:text-lg text-xl items flex'>$ {price}</h1>
      
     
        <div className='flex flex-row'>
          <button className='sm:p-2 p-4 m-2 border border-black' onClick={() => dispatch(add({...props}))}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <h1 className='sm:p-2 p-4 m-2 font-bold sm:text-lg  text-2xl'>{quantity}</h1>
          <button className='sm:p-2 p-4 m-2 border border-black' onClick={() => dispatch(del({...props}))}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
      
     
      </div>
    );
}

export default Shopify_Card;
