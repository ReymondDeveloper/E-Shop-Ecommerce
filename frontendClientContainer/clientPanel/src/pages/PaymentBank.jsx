import React from 'react'
import '../pagesStyle/PaymentBank.css';
const PaymentBank = ({handleClose}) => {
  return (
    <div className='paymentBankContainer'>
        <div className='paymentBank'>
            <div className='paymentBankHeader'>
                <span className='paymentBankHeaderTlt'>Add Bank Account</span>
            </div>
            <div className='paymentBankBody'>
                <input className='paymentBankInput' required placeholder='Full name in the bank account' />
                <input className='paymentBankInput' required placeholder='Account No.' />
                <div className='paymentBankBodyGroup'>
                    <select className="paymentBankInput slc-Option">
                        <option selected className='slTFirst'>Bank Name</option>
                        <option value="1" className='listFirstOpt'>Asia United Bank (AuB)</option>
                        <option value="2" className='listFirstOpt'>Banco de Oro Bank (BDO)</option>
                        <option value="3" className='listFirstOpt'>Bank of the Philippine islands (BPI)</option>
                        <option value="3" className='listFirstOpt'>China Banking Corporation (Chinabank)</option>
                    </select>
                </div>
                <div className='paymentBankBodySetDef'>
                    <i className="iconPaymentBankCheck bi-check-square-fill"></i>
                    <p className='paymentBankBodyPhg'>Set as Default</p>
                </div>
            </div>
       
            <div className='paymentBankFooter'>
                <button className="btnSaveBank">Save</button>
                <button className="btnCancelBank" onClick={handleClose}>Cancel</button>
            </div>  
        </div>
    </div>
  )
}

export default PaymentBank