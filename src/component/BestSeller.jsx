import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import { useEffect } from 'react';
import Title from './Title';

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestSeller , setBestSeller] = useState([]);
    
    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestSeller));
        setBestSeller(bestProduct.slice(0,5))
    },[])
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLER'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Hii This is Best SEller Page
            </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'></div>
   {
    bestSeller.map((item,index)=>(
   <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
        ))
   }
    </div>
  )
}

export default BestSeller