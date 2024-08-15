import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../utils/cartSlice';
const Card = (props) => {
  const  {title,description,images,price}=props;
    const dispatch = useDispatch();
  return (
    <div className='w-[450px] h-[650px] rounded-xl shadow-2xl border-black flex justify-center flex-col items-center  p-4 m-10'>
        <img className="w-80 h-[350px] flex rounded-xl p-2 m-4 "src={images[0]}/>
    <h1 className='text-2xl font-bold '>{title}</h1>
    <h1 className='text-xl items flex'>{price}</h1>
    <button className='w-36 h-16 border border-black bg-blue-600 text-white rounded-lg text-xl p-2 m-4'onClick={()=>dispatch(add({...props}))}>Add To Cart</button>
 
    </div>
  )
}

export default Card