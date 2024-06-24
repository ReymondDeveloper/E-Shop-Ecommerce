import React,{ useState } from 'react'
import '../pagesStyle/UserProf.css';
import Navbar from '../components/Navbar';
import Setting from './Setting';
import { Link } from 'react-router-dom';
import UserEditProfile from './UserEditProfile';
const UserProf = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const [modal,setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  return (
    <>
        <Navbar/>
        <div className='userProfContainer d-flex'>
        <Setting/>
            <div className='userProfRightContainer container-fluid p-0'>
                <div className='userPrfHeaderDesign'>
                    <div className='userProfHeaderComponent'>
                        <h2 className='userHeaderTitle'>Customer Profile <Link className="iconUserHeader bi-pencil-square" onClick={openModal}></Link></h2>
                        {modal && (<UserEditProfile modalClose={closeModal}/>)}
                    </div>
                </div>
                <div className='userBody'>
                  
                    <div className='userBodyHeader d-flex'>  
                        <div className='userDetails'>
                            <div className='userBodyComponent'>
                                    <h3 className='userTle'>Fullname</h3>
                                    <p className='userPharag'>Sample Data</p>
                            </div>
                            <div className='userBodyComponent'>
                                    <h3 className='userTle'>Gender</h3>
                                    <p className='userPharag'>Sample Data</p>
                            </div>
                            <div className='userBodyComponent'>
                                    <h3 className='userTle'>PhoneNumber</h3>
                                    <p className='userPharag' >Sample Data</p>
                            </div>
                        </div>    
                            <div className='userPhoto'>
                                <div className='imageWrapper'>
                                    {selectedImage ? (
                                        <img src={selectedImage} alt="User Profile" className='userImage'/>
                                    ) : (
                                        <i className="iconImageUser bi-person-circle defaultIcon"></i>
                                    )}
                                </div>
                                    <label className='uploadImage' >Upload Image</label>
                                    <input type="file" accept='image/jpeg, image/png, image/jpg' id='input-file' onChange={handleImageChange} className='uploadInput'/>
                            </div>
                    </div>  
                </div>
                <div className='userFooter'>
                    <div className='userFooterHeader'>
                        <h3 className='userFooterHeaderTitle'>Still Need Help?</h3>
                    </div>
                    <div className='userFooterBody'>
                        <div className='userFooterContainer'>
                            <i className="userIconFooter bi-chat-heart iconHeart"></i>
                            <div className='userFooterContentContainer'>
                                <p className='userFooterTtl'>Chat with us</p>
                                <p className='userFooterParag'>Talk to CLEO, our 24/7 virtual</p>
                                <p className='userFooterParag'>customer care officer or get support</p>
                                <p className='userFooterParag'>from our Customer Care Specialists</p>
                            </div>
                            
                        </div>
                        <div className='userFooterContainer'>
                            <i className="userIconFooter bi-telephone"></i>
                            <div className='userFooterContentContainer'>
                                <p  className='userFooterTtl'>Call E-Shop</p>
                                <p className='userFooterParag'>(63)9436134</p>
                                <p className='userFooterParag'>Available daily from 8AM to 9PM</p>
                            </div>
                        </div>
                        <div className='userFooterContainer'>
                            <i className="userIconFooter bi-facebook"></i>
                            <div className='userFooterContentContainer'>
                                <p  className='userFooterTtl'>E-Shop Ph</p>
                                <p className='userFooterParag'>E-shop Philippines official online</p>
                                <p className='userFooterParag'>Get Advice and help from your fellow</p>
                                <p className='userFooterParag'>E-Shop sustomers!</p>
                            </div>
                        </div>
                    </div>    
                </div>
                
            </div>

        </div>
    </>
  )
}

export default UserProf