import React,{ useState } from 'react'
import '../pagesStyle/PrivacySetting.css';
import Navbar from '../components/Navbar';
import Setting from './Setting';
import ModalPrivacy from './ModalPrivacy';
const PrivacySetting = () => {

  const [modalOpen,setModalOpen] = useState (false);

  const handleShowModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <Navbar/>
        <div className='privacySettingMain d-flex '>
            <Setting/>
                <div className='privacyContainer container-fluid  p-0'>
                    <div className='privacySettingHeader'>
                        <h3 className='privacyTitleHeader'>Privacy Settings</h3>
                    </div>
                    <div className='privacySettingBody'>
                        <span className='privacyPharag'>Request Account Deletion</span>
                        <button className='privacyBtnDtl'onClick={handleShowModal} >Delete</button>
                    </div>
                    {modalOpen &&  (<ModalPrivacy handleClose={handleCloseModal}/>)}

                </div>
        </div>

    </>
  )
}

export default PrivacySetting