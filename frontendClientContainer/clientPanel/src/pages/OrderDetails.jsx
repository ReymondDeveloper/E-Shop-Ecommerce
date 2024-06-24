import React from 'react'
import '../pagesStyle/OrderDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
const OrderDetails = () => {
    const [showDetails, setShowDetails] = useState(true);

    const toggleDetails = () => {
      setShowDetails(!showDetails);
    };
  return (
    <div className='orderDetailsComponent container-fluid vh-100'>
        <div className='orderDetailsContainer'>
            <div className='orderDetailsHeader'>
                <h2 className='orderDetailsTtl'>Order Details <i  className={`iconOrderList  ${showDetails ?  'bi-eye' : 'bi-eye-slash' }`} 
              onClick={toggleDetails}
              style={{ cursor: 'pointer' }}
            ></i></h2>
                <hr className='OrderDetailsHr'/>
            </div>
            {showDetails && (
            <div className='orderDetailsBody'>
                <div className='topLeftContainer d-flex'>
                    <FontAwesomeIcon className='topLeftIcon d-flex' icon={faCircleUser} />
                    <div className='topLeftBody'>
                        <h3 className='topLeftTitle' >Customer</h3>
                        <ul className='topLeftListComponents d-flex flex-column'>
                            <li className='topleftList'>Name : </li>
                            <li className='topleftList' >Email : </li>
                            <li className='topleftList' >PhoneNumber : </li>
                        </ul>
                    </div>
                </div>

                <div className='topRightContainer d-flex'>
                     <i className="topRightIcon bi-clipboard-check"></i>
                     <div className='topRightBody'>
                        <h3 className='topRightTitle' >Product Info</h3>
                        <ul className='topRightListComponents d-flex flex-column'>
                            <li className='topRightList'>Product ID : </li>
                            <li className='topRightList' >Price : </li>
                            <li className='topRightList' >Shipping fee (5%) : </li>
                            <li className='topRightList' >Total : </li>
                        </ul>
                    </div>
                </div>

                <div className='leftBottomContainer d-flex' >
                     <i className="bottomLeftIcon bi-credit-card"></i>
                     <div className='bottomLeftBody'>
                        <h3 className='bottomleftTitle'>Payment Method</h3>
                        <ul className='bottomLeftListComponents d-flex flex-column'>
                            <li className='bottomleftList'>ID Number : </li>
                            <li className='bottomleftList' >Business Name : </li>
                            <li className='bottomleftList' >PhoneNumber : </li>
                        </ul>
                    </div>
                </div>

                <div className='rightBottomContainer d-flex' >
                    <i className="bottomRightIcon bi-card-checklist"></i>
                    <div className='bottomrightBody'>
                        <h3 className='bottomRightTitle'>Notes</h3>
                        <textarea className='orderFormControl' rows='5' placeholder='Type some note...'></textarea>
                    </div>

                </div>
                
            </div>
            ) }
            {showDetails && (
            <div className='orderDetailsFooter'>
                <Link className='btnOrderDetails'>Check out</Link>
            </div>
            )}
        </div>
        
    </div>
  )
}

export default OrderDetails