import React from 'react'
import '../pagesStyle/EditPassword.css';
import { useState } from 'react';
import NewPassword from './NewPassword';
const EditPassword = ({handleClose}) => {

    const [newPassModal,setNewPassModal] = useState(false);
    
    const open = () => setNewPassModal(true);
    const close = () => setNewPassModal(false);

  return (
    <div className='editPasswordMain container-fluid vh-100'>
        <div className='editPassword shadow'>
            <div className='editPasswordHeader'>
                <h2 className='editPasstitle'><span onClick={handleClose} className="iconArrowHeaderPass bi-arrow-left"></span> Enter Your Password</h2>
            </div>
            <div className='editPasswordBody'>
                <input type='text' className='inputPass' placeholder='Input your current password to verify'></input>
                <i className="iconEyePass bi-eye"></i>
            </div>
            <div className='editPasswordFooter'>
                <button className='btnConfirmPass' onClick={open} >Confirm</button>
            </div>
            {newPassModal && (<NewPassword handleClose={close}/>)}
        </div>
    </div>
  )
}

export default EditPassword
