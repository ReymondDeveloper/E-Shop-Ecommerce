import React,{useState} from 'react'
import '../pagesStyle/PaymentCard.css';
import { FaCcVisa, FaCcJcb, FaCcPaypal } from 'react-icons/fa';
const PaymentCard = ({handleCloseCard}) => {

    const [expireDate,setExpireDate] = useState("text");

    const handleFocus = () => {
        setExpireDate("date");
    }


  return (
    <div className='paymentCardContainer'>
        <div className='paymentCard'>
            <div className='cardHeaderContainer'>
                <div className='cardHeaderTop'>
                    <p className='cardHeaderTlt'>Add New Credit Card</p>
                </div>
                <div className='cardHeaderBottom'> 
                    <i className="iconCardBottom bi-shield-check"></i>
                    <div className='cardBottomContainer'>
                        <p className='cardTle'>Your credit card details are protected.</p>
                        <p className='cardPharag'>We partner with Airpay so that your card details are safe. Shopee will not have access to your card info.</p>
                    </div>
                </div>
            </div>

            <div className='cardBodyContainer'>
                <div className='cardBodyTop'>
                    <p className='cardBodyPhrg'>Card Details</p>
                    <FaCcVisa className="payCardIcon" />
                    <FaCcJcb className='payCardIcon' />
                    <FaCcPaypal className='payCardIcon' />
                </div>
                <div className='cardBodyBottom'>
                    <input className='cardBodyInput' required placeholder='Card Number' type='number' />
                    <input className='cardBodyInputLft' required placeholder='Expiry Date' type={expireDate} onClick={handleFocus}/>
                    <input className='cardBodyInputRgt' required placeholder='CVV (Card Verification Value) ' type='password'/>
                    <input className='cardBodyInput' required placeholder='Name on Card'type='text'/>
                </div>
            </div>
            <div className='cardFooterContainer'>
                <button className='cardBtnSubmit'>Submit</button>
                <button className='cardBtnCancel' onClick={handleCloseCard}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default PaymentCard