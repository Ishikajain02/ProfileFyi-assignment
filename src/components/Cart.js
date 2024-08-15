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
      <h1 className='p-2 font-bold  text-6xl'>Shopping Bag</h1>
      <h2 className='p-2 text-2xl'>{count} items in your bag</h2>
      </div>
    <div className='flex flex-row items-center justify-between'>
       
       <div className='flex flex-col'>
        {allproducts.map((e)=>{
        return <Shopify_Card {...e}/>
           
        })}
        </div>
        <div className='w-[520px] h-[500px]  shadow-2xl p-4 m-24 flex items-center flex-col  bg-yellow-200 rounded-3xl'>
       <h1 className='font-bold text-3xl p-4 m-4'>Order Summary</h1>
       <h1 className='font-bold text-3xl'>Total Price-{price}</h1>
       <h1 className='font-bold text-3xl'>Discount- {price-discount}</h1>
       <h2 className='font-bold text-3xl'>Amount -{discount}</h2>
       </div>
    </div>
    </>
  )
}

export default Cart