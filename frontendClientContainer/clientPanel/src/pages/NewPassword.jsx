import React, { useState,useEffect } from 'react'
import '../pagesStyle/NewPassword.css';
import { useNavigate } from 'react-router-dom';
import FadeLoader from "react-spinners/ClipLoader";

const NewPassword = ({handleClose}) => {

    const navigate = useNavigate();
    const [load,setLoad] = useState(false);

    useEffect(() => {
        if(load){
            // setLoad(true);
            const timer = setTimeout(() => {
                setLoad(false);
                navigate('/password')
            },5000 ) // 5 second
            return () => clearTimeout(timer);
        }
    },[load,navigate]);

    const handleClickBack =() => {
        console.log("Navigating back to /password");
        navigate("/password")
    } 
    const handleClickSave = () => {
        console.log("Save clicked, starting loader");
        setLoad(true)
    } 

  return (
    <div className='newPassContainer container-fluid vh-100'>
        <div className='newPassword'>
            <div className='newPasswordHeader'>
                <h2 className='newPasstitle'><span onClick={handleClose} className="iconArrowNewPass bi-arrow-left"></span> Enter New Password</h2>
            </div>
            <div className='newPasswordBody'>
                <input type='text' className='inputNewPass' placeholder='New password'></input>
            </div>
            <div className='newPasswordFooter'>
                {load ?
                   <FadeLoader color={"#0094FF"}loading={load}aria-label="Loading Spinner"data-testid="loader"/>
                    :
                <button onClick={handleClickSave} className='btnNewPass'>Save</button>
                }
            </div>
        </div>
    </div>
  )
}

export default NewPassword