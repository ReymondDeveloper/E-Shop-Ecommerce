import React, { useEffect, useState } from 'react'
import '../pagesStyle/ProductComponent.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
const ProductComponent = ({filteredItems = [] }) => {
    

  return (
    <div className='productsContainer container-fluid vh-100'>
        {filteredItems.length === 0 ? (
        <p>No product available</p>
        ) : (
        <div className={`productContainer ${filteredItems.length > 2 ? 'scrollable' : ''}`}>
          {filteredItems.map((product) => (
            <div key={product.id} className='productCard'>
              <img
                src={`data:${product.type};base64,${product.imageData}`}
                alt={product.name}
                className='productImage'
              />
              <h2 className='productName'>{product.name}</h2>
              <p className='productDescription'>{product.description}</p>
              <p className='productPrice'>₱{product.price.toFixed(3)}</p>         
                <Link>
                {/* <button className='btnBuy' onClick={() => handleAddToCart(product) }>Buy Now</button> */}
                <button className='btnBuy' >Buy Now</button>
                </Link>
      
            </div>
          ))}
        </div>
      )}
       
    </div>
  )
}

export default ProductComponent