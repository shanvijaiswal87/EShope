import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import SearchBar from '../../components/SearchBar/SearchBar'
import './Properties.css'
import data from '../../utils/data'


const Properties = () => {
  
  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">
        <SearchBar/>

        <div className="paddings flexCenter properties">
          
        {data.map((card, i) => (
           
             <ProductCard card={card} key={i}/>
            
          ))}
        </div>
      </div>
    </div>
  )
}

export default Properties
