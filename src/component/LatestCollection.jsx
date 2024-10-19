import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useState } from 'react';
import ProductItem from './ProductItem';
import Title from './Title';
const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    const [latestProducts ,setLatestProducts] =useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,7));
    },[])
  return (
    <div className='my-10'>
<div className='text-center py-8 text-3xl'>
<Title text1={'LATEST'} text2={'COLLECTION'}/>
<p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'></p>
</div>
{/* Rendering Products */}
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
    {latestProducts.map((item, index)=>(
        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
    ))}
</div>

    </div>
  )
}

export default LatestCollection

// NOTE

// In your LatestCollection component, the products.slice(0, 7) method is used to create a new array that contains the first seven products from the products array provided by the ShopContext. Here’s a breakdown of what's happening:

// Context Usage: You’re using the useContext hook to access the products array from the ShopContext. This array likely contains all the products available in your shop.

// State Management: You’re managing the state of the latest products with useState, initializing latestProducts as an empty array.

// Effect Hook: In the useEffect hook, you call setLatestProducts(products.slice(0, 7));. This runs once when the component mounts (because the dependency array is empty).

// Slice Method: The slice(0, 7) method creates a new array that includes the elements from index 0 to index 6 of the products array (i.e., the first seven elements). If there are fewer than seven products, it will just return all of them.

// Rendering: Finally, you map over the latestProducts array to render a ProductItem component for each product, displaying the product’s image, name, and price.

// Overall, this setup ensures that only the latest seven products are displayed in your LatestCollection component.