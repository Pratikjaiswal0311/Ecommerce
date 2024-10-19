import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Product = () => {
 
  const {products} = useContext(ShopContext);
  const {productId} = useParams();
  
  console.log(productId);
  //use same product Id as u used in NavBAR
  return (
    <div>


    </div>
  )
}

export default Product