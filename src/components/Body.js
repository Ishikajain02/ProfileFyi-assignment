import React, { useEffect, useState } from 'react'
import Card from './Card';
import Nav from './Nav';
import Sidebar from './Sidebar';
import { useDispatch } from 'react-redux';
const Body = () => {
    const [products,setproducts]=useState([]);
    const dispatch = useDispatch();
    async function fn(){
        const products=await fetch("https://dummyjson.com/products/category/mens-shoes");
        const data=await products.json();
        setproducts(data.products);
    }
    useEffect(()=>{
     fn();
    },[]);
  return (
    <div className='flex'>
 
    <div className='grid grid-cols-3 gap-4 justify-center items-center p-6 m-6'>
        {products.map((e)=>{
            return <Card {...e}/>
})}
    </div>
    </div>
  )
}

export default Body