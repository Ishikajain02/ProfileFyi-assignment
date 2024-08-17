import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, del } from '../utils/cartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import Animation from './Animation';
import { useState } from 'react';
const Card = (props) => {
  const { title, description, images, price, id } = props;
  const dispatch = useDispatch();
  
  // Find the item in the cart by its id
  const cartItem = useSelector((store) => store.cart.items.find((item) => item.id === id));
  
  // If the item is in the cart, use its quantity, otherwise default to 0
  const quantity = cartItem ? cartItem.quantity : 0;
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    dispatch(add({ ...props }));
    setShowNotification(true);
  };

  const handleNotificationClose = () => {
    setShowNotification(false);
  };
  return (
    <div className='w-[350px] h-[550px] md:w-[150px] sm:w-[100px] md:h-[450px] sm:h-[350px] rounded-xl shadow-2xl border-black flex justify-center flex-col items-center p-4 m-10 sm:p-1 md:p-2 sm:m-2 md:m-4 '>
      <img className="w-80 h-[350px] md:w-62 md:h-[250px] sm:w-42 md:w-52 flex rounded-xl p-2 m-4" src={images[0]} alt={title} />
      <h1 className=' sm:text-lg text-2xl font-bold'>{title}</h1>
      <h1 className='sm:text-lg text-xl items flex'>$ {price}</h1>
      
      {quantity > 0 ? (
        <div className='flex flex-row'>
          <button className='sm:p-2 p-4 m-2 border border-black' onClick={() => dispatch(add({...props}))}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <h1 className='sm:p-2 p-4 m-2 font-bold sm:text-lg  text-2xl'>{quantity}</h1>
          <button className='sm:p-2 p-4 m-2 border border-black' onClick={() => dispatch(del({...props}))}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
      
      ) : (
        <button className='w-36 sm:w-[28] h-16 sm:h-10  border border-black bg-blue-600 text-white rounded-lg text-xl p-2 m-4' onClick={handleAddToCart}>
          Add To Cart
        </button>
      )}

{showNotification && (
        <Animation message="You added an item to the cart!" onClose={handleNotificationClose} />
      )}
    </div>
  );
}

export default Card;
