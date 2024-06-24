import React,{useState,useEffect} from 'react'
import '../pagesStyle/Password.css';
import Navbar from '../components/Navbar';
import Setting from './Setting';
import FadeLoader from "react-spinners/ClipLoader";
import EditPassword from './EditPassword';
const Password = () => {
  
  const  [loading,setLoading] = useState(false); 
  const [modalPass, setModalPass] = useState(false);

  const closeModal = () => {
    setModalPass(false);
    setLoading(false);
  };

  useEffect(() => {
    let timer;
    if (loading) {
       timer = setTimeout(() => {
        setLoading(false);
        setModalPass(true);
      }, 5000); // 5 seconds
    }
      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    
  }, [loading]);

  const handleClick = () => {
    setLoading(true);

    setModalPass(false);
  };

  return (
    <>
      <Navbar/>
        <div className='passwordMain d-flex'>
           <Setting/>
           <div className='password container-fluid p-0'> 
              <div className='passwordComponent shadow'>
             
                 <div className='passwordHeader'>
                    <i className="iconShieldHeader bi-shield-check"></i>
                    <span className='passwordPharg'>To protect your account security, please verify your</span>
                    <span className='passwordPharg'>identity with on of the methods below.</span>
                 </div>

                 <div className='passwordFooter'>
                      {loading ?
                            <FadeLoader color={"#0094FF"}
                              loading={loading}
                              
                              aria-label="Loading Spinner"
                              data-testid="loader"
                            />
                            :
                        <button onClick={handleClick} className='btnFooterPass'>
                          <i className="iconKey bi-key"></i> Verify by Password
                        </button>
                      }
                 </div>
                     {modalPass && (<EditPassword handleClose={closeModal}/> )}

              </div>
           </div>
        </div>
    </>
  )
}

export default Password