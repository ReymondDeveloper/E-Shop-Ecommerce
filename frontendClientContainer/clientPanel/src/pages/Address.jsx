import React from 'react';
import '../pagesStyle/Address.css';
import Navbar from '../components/Navbar';
import Setting from './Setting';
import { useState } from 'react';
import AddressEdit from './AddressEdit';
const Address = () => {

  const [modal,setModal] = useState(false);

  const modalOpen = () => setModal(true);
  const modalClose = () => setModal(false);

  return (
    <>
      <Navbar/>
      <div className='addressContainer d-flex'>
        <Setting/>
            <div className='addressMain container-fluid p-0'>
                <div className='addressComponent'>
                    <div className='addressHeader'>
                       <span className='addressHeaderTle'>Address</span>
                       <i className="addressIcon bi-pencil-square" onClick={modalOpen}></i>
                    </div>
                    <div className='addressBody'>
                        <div className='addressBodyHeader'>
                           <ul className='addressBodytleContainer'>
                               <li className='addressBodyTle Name'>Sample FullName</li>
                               <li className='addressBodyTle'>(+63)90381312</li>
                           </ul>
                           <ul className='addressBodytleFooter'>
                              <li className='addressBodyfooterBrgyCode'>Zone 3 ,Malisbong  Sablayan Occidental Mindoro </li>
                              <li className='addressBodyfooterHouseNo'>Malisbong Zone 3 Sablayan Occidental Mindoro </li>
                              <li className='addressBodyfooterCode'>5104</li>
                           </ul>
                        </div> 
                        <div className='addressDefFooter'>
                            <span className='addressDef'>Default</span>
                        </div>
                    </div>
                    {modal && (<AddressEdit handleClick={modalClose}/>)}
                </div>
                
            </div>
      </div>
    </>
  );
}

export default Address;
