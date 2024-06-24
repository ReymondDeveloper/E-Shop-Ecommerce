import React from 'react'
import '../pagesStyle/UserEditProfile.css';
const UserEditProfile = ({modalClose}) => {
  return (
    <div className='userEditprofileContainer container-fluid vh-100'>
        <div className='editProfileContainer'>
            <i className="exitIconUser bi-x-lg" onClick={modalClose} ></i>
            <div className='editHeader'> 
                <h3 className='editHeadertitle'>Edit Profile</h3>
            </div>
            <div className='editBody'>
                <div className='editBodyComponent'>
                    <p className='editTle'>FirstName</p>
                    <input className='editBodyTxt'type='text'/>
                </div>

                <div className='editBodyComponent'>
                    <p className='editTle'>LastName</p>
                    <input className='editBodyTxt' type='text'/>
                </div>
                {/* <div className='editBodyComponent'>
                    <p className='editTle'>Email</p>
                    <input className='editBodyTxt' type='text'/>
                </div> */}

                <div className='editBodyComponent'>
                    <p className='editTle'>Gender</p>
                    <input className='editBodyTxt' type='text'/>
                </div>

                <div className='editBodyComponent'>
                    <p className='editTle'>PhoneNumber</p>
                    <input className='editBodyTxt' type='text'/>
                </div>


                {/* <div className='editBodyComponent'>
                    <p className='editTle'>Address</p>
                    <input className='editBodyTxt' type='text'/>
                </div> */}
            </div>
            <div className='editFooter'>
                <button className='editUserBtn'>Save</button>
            </div>
        </div>
    </div>
  )
}

export default UserEditProfile