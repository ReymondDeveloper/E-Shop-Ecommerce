import React from 'react'
import '../pagesStyle/AddressEdit.css';
import { Link } from 'react-router-dom';
const AddressEdit = ({handleClick}) => {
  return (
    <div className='addressEditContainer container-fluid vh-100'>
        <div className='addressEdit'>
            <div className='editAddressHeader'>
                <p className='editTle'>Edit Address</p>
            </div>
            <div className='editAddressBody'>
                <div className='firstLine'>
                    <label className='labelTle'>Region,Province,City,Barangay</label>
                    <input className='inputData' type='text' placeholder='current location ' required />
                </div>
                <div className='secondLine'>
                    <label className='labelTle'>Street Name,Building,House No.</label>
                    <input className='inputData' type='text' placeholder='e.g. 122 ship street' required />
                </div>
                <div className='thirdLine'>
                    <label className='labelTle'>Postal Code</label>
                    <input className='inputData' type='text' placeholder='e.g. 0394' required />
                </div>
                <div className='addressBtnContainer'>
                    <Link className='addressBtnCancel' onClick={handleClick}>Cancel</Link>
                    <Link className='addressBtnSubmit'>Submit</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddressEdit