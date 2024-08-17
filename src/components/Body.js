import React, { useEffect, useState } from 'react'
import Card from './Card';
import Nav from './Nav';
import Sidebar from './Sidebar';
import { useDispatch } from 'react-redux';
import Shimmer from './Shimmer';
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
  return (products.length!=0)?(
    <div className='flex justify-center items-center'>
    <div className='flex flex-wrap md:flex-col sm:flex-col flex-row  gap-4 p-6 m-6 items-center '>
      {products.map((e) => {
        return <Card key={e.id} {...e} />;
      })}
    </div>
  </div>
  ):<Shimmer/>
}

export default Body