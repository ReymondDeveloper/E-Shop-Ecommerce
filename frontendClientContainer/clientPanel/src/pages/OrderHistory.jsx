import React from 'react'
import '../pagesStyle/OrderHistory.css';
import Navbar from './../components/Navbar';
const OrderHistory = () => {
  return (
    <div className='orderHistoryContainer container-fluid vh-100'>
        <Navbar/>
        <div className='orderHistoryHeader'>
            <div className='orderHeaderComponentHeader'>
                <h1 className='orderHeaderTitle'>Order history</h1>
            </div>
        </div>

        <div className='orderHistoryBody '>
            <div className='orderHeaderComponent'>
                <i className="iconOrderSearch bi-search"></i>
                <input className='orderHistorySearchbar' placeholder='Search for Order Id or Product' type='search' />
                <button className='btnFilter'><i className="iconFilter bi-sliders"></i> Filters</button>
            </div>
            <div className='orderHistoryBodyComponent'>
                <ul className='orderBodyComponent' >
                    <div className='orderBodyListHeader'>
                        <li className='orderBodyList list'>ID</li>
                        <span className='listComponent'>01</span>
                    </div>
                    <div className='orderBodyListHeader'>
                        <li className='orderBodyList list' >Email</li>
                        <span className='listComponent'>@mail</span>
                    </div>
                    <div className='orderBodyListHeader'>
                        <li className='orderBodyList list' >Product</li>
                        <span className='listComponent'>Gucci</span>
                    </div>
                    <div className='orderBodyListHeader'>
                        <li className='orderBodyList list' >Price</li>
                        <span className='listComponent'>1.000</span>
                    </div>
                    <div className='orderBodyListHeader'>
                        <li className='orderBodyList list' >Category</li>
                        <span className='listComponent'>Bag</span>
                    </div>
                    <div className='orderBodyListHeader'>
                        <li className='orderBodyList' >Address</li>
                        <span className='listComponent'>sampaloc.manila0392</span>
                    </div>
                    <div className='orderBodyListHeader'>
                        <li className='orderBodyList' >PhoneNumber</li>
                        <span className='listComponent'>9482042</span>
                    </div>
                    <div className='orderBodyListHeader'>
                        <li className='orderBodyList' >OrderDate</li>
                        <span className='listComponent'>00-03-1991</span>
                    </div>
                    <div className='orderBodyListHeader'>
                        <li className='orderBodyList' >Delivery Status</li>
                        <span className='listComponent'>pendding</span>
                    </div>
                    <div className='orderBodyListHeader'>
                         <li className='orderBodyList' >Delivery Raider</li>
                        <span className='listComponent'>pendding</span>
                    </div>
                    <div className='orderBodyListHeader'>
                        <li className='orderBodyList' >Phone Number</li>
                        <span className='listComponent'>pendding</span>
                    </div>
                    <div className='orderBodyListHeader'>
                        <li className='orderBodyList' >Action</li>
                        <span className='listComponent btnOrderDlt'>Delete</span>
                    </div>
                </ul>
                
            </div>
        </div>
    


     
    </div>
  )
}

export default OrderHistory