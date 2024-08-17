import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store'
import Card from './Card'
import Shopify_Card from './Shopify_Card'
import Nav from './Nav'
const Cart = () => {
    const allproducts=useSelector((store)=>store.cart.items);
    const price=useSelector((store)=>store.cart.price);
    const discount=useSelector((store)=>store.cart.discountprice);
      const count=useSelector((store)=>store.cart.value);
  return (
    <>
    <Nav/>
    <div className='p-6 m-2'>
      <h1 className='p-2 md:font-semibold font-bold sm:text-lg md:text-2xl text-6xl'>Shopping Bag</h1>
      <h2 className='p-2 text-2xl md:text-lg '>{count} items in your bag</h2>
      </div>
    <div className='flex flex-col items-center'>
       
       <div className='flex flex-row flex-wrap items-center justify-center'>
        {allproducts.map((e)=>{
        return <Shopify_Card {...e}/>
           
        })}
        </div>

        <div className=' w-[380px] lg:w-[520px] h-[500px]  shadow-2xl p-4 m-24 flex items-center flex-col bg-white'>

       <h1 className='lg:font-bold  font-semibold lg:text-3xl text-xl p-4 m-4'>Order Summary</h1>
       <div className=' font-semibold lg:font-bold text-lg lg:text-3xl lg:w-[400px] w-[300px] p-4 m-4  flex flex-row justify-between'>
       <h1 className=''>Total Price-</h1>
       <h1>{price}</h1>
       </div>
       <div className='lg:font-bold font-semibold border-b-4 lg:text-3xl text-lg lg:w-[400px] w-[300px] p-4 m-4  flex flex-row justify-between'>
       <h1 className=''>Discount-</h1>
       <h1>{price-discount}</h1>
       </div>
       <div className='lg:font-bold  font-semibold lg:text-3xl text-lg lg:w-[400px] w-[300px] p-4 m-4  flex flex-row justify-between'>
       <h1 className=''>SubTotal-</h1>
       <h1>{discount}</h1>
       </div>
       <button className='bg-black text-white font-semibold lg:font-bold  text-lg lg:text-2xl w-24 lg:w-32  h-12 lg:h-20 rounded-lg p-2 m-2'>Checkout</button>
       </div>
    </div>
    </>
  )
}

export default Cart
