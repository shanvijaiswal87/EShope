import React from 'react'
import {AiFillHeart, AiOutlineHeart,AiOutlineShoppingCart} from 'react-icons/ai'
import { FaShoppingCart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";

// import { MdShoppingCart } from "react-icons/md";
// <MdShoppingCart />

import './ProductCard.css'

const ProductCard = ({card}) => {
    return (
        <div className="flexColStart r-card">
          
            {/* <MdAddShoppingCart size={23}/> */}
            <AiOutlineHeart size={24} />
        <img src={card.image} alt="home" />
        
        
        <span className="secondaryText r-price">
          <span style={{ color: "orange" }}>$</span>
          <span>{card.price}</span>
        </span>
        <span className="primaryText">{card.name}</span>
        <span className="secondaryText">{card.detail}</span>
      </div>
      )
   
  
}

export default ProductCard
