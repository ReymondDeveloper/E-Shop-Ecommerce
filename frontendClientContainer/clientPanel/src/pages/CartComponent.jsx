import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../pagesStyle/CartComponent.css';

const CartComponent = () => {
  // Initialize state with sample data
  const [cartItems, setCartItems] = useState([
    { productName: 'Product 1', category: 'Category 1', price: '₱100.00' },
    { productName: 'Product 2', category: 'Category 2', price: '₱200.00' }
  ]);

  // Function to handle removal of an item
  const handleRemoveItem = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <div className='clientCartComponent container-fluid p-0'>
      <Navbar />
      <div className='cartContainer'>
        <div className='cartContainerBody shadow'>
          <p className='cartTitleContainer'>Shopping Cart <i className="iconTleCart bi-bag-check"></i></p>
          <div className='cartComponentHeader'>
            <div className='list list-header'>
              <p className='cart-List product'>Product</p>
              <p className='cart-List category'>Category</p>
              <p className='cart-List price'>Price</p>
              <p className='cart-List action'>Action</p>
            </div>
            {cartItems.length === 0 ? (
              <div className='cartComponentFooter'>
                <h2 className='cartComponentFooterTitle'>Your cart is Empty</h2>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className='mainList'>
                  <div className='list'>
                    <p className='cart-Data'>{item.productName}</p>
                    <p className='cart-Data'>{item.category}</p>
                    <p className='cart-Data'>{item.price}</p>
                    <div className='cart-Data'>
                      <button onClick={() => handleRemoveItem(index)} className='btnCartData'>Delete</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <div className='orderSummary shadow'>
          <div className='headerSummary'>
            <span className='headerSumTtlPharg'>Location</span>
            <span className='headerSumPharg'><i className="iconLtn bi-geo-alt"></i>Kalawaan, Pasig City,Metro Manila~Pasig </span>
          </div>
          <div className='headerBody'>
            <span className='headerBodyTle'>Order Summary</span>
            <div className='headerContainer'>
              <span className='headerBodyPhrg'>Subtotal</span>
              <span className='headerBodyPhrg'>₱ Subtotal</span>
            </div>
            <div className='headerContainer'>
              <span className='headerBodyPhrg'>Shipping Fee</span>
              <span className='headerBodyPhrg'>₱ Shipping Fee</span>
            </div>
          </div>
          <div className='headerFooter'>
            <div className='headerContainer'>
              <p className='headerFooterTlt'>Total</p>
              <p className='headerFooterTlt'>₱ 00.00</p>
            </div>
            <div className='headerFooterBtnContainer'>
              <button className='btnCheckOut'>Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartComponent;
