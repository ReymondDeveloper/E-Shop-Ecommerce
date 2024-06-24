import React from 'react'
import '../pagesStyle/ModalPrivacy.css';


const ModalPrivacy = ({handleClose}) => {
  return (
    <div className='modalSettingPrivacy'>
        <div className='modalPrivacy'>
            <div className='modal-header'>
                <i className="close bi-x-lg" onClick={handleClose}></i>
            </div>
            <div className='modal-content'>
                <h2 className='modal-Title'>Important<i className="iconWarning bi-exclamation-lg"></i></h2>
                <span className='modal-Pharag'>• Continuing with the application will be considered as your confirmation that there are no pending buying or selling transactions in your account, 
                    including any unused or non-refunded e-vouchers, etc</span>
                <span className='modal-Pharag'>• After successful deletion of your account, you will not be able to log in to a deleted account and view previous account history.</span>
                <span className='modal-Pharag'>• After successful deletion of your account, you will not be able to access your affiliate account,
                    and any remaining affiliate order/commission in your account will be forfeited</span>
                <span className='modal-Pharag'>• Shopee reserves the right to reject future account creation requests.</span>
            </div>
            <div className='modal-footer'>
                <button className='btnModal'  onClick={handleClose}>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default ModalPrivacy