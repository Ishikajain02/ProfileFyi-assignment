import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add ,del} from '../utils/cartSlice';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faMinus , faPlus} from '@fortawesome/free-solid-svg-icons'
const Shopify_Card = (props) => {
    const  {title,description,images,price,quantity}=props;
    const dispatch = useDispatch();
  
  return (
    <div >
    
   
    <div className='w-[1250px] h-[350px] rounded-xl shadow-2xl border-black flex justify-between flex-row items-center  p-4 m-10'>
      <div className='flex items-center'>
        <img className="w-80 h-[350px] flex rounded-xl p-2 m-4 "src={images[0]}/>
    <h1 className='text-2xl font-bold p-2 m-2 '>{title}</h1>
    </div>
    <h1 className='text-xl items flex p-2 m-2 font-semibold '>${price}</h1>
    <div className='flex items-center'>
    <button className=' p-4 m-2 border border-black'onClick={()=>dispatch(add({...props}))}><FontAwesomeIcon icon={faPlus} /></button>
    <h1 className='p-4 m-2 font-bold text-2xl'>{quantity}</h1>
    <button className='p-4 m-2 border border-black' onClick={()=>dispatch(del({...props}))}><FontAwesomeIcon icon={faMinus} /></button> 
    </div>
    </div>
    </div>
  )
}

export default Shopify_Card