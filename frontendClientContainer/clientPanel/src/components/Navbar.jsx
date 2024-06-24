import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShopware } from '@fortawesome/free-brands-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link,useNavigate } from 'react-router-dom';
import './componentStyle/navbar.css';
const Navbar = () => {
    const [open,setOpen] = useState(false);
    const menu = [
        { name: "My Account", path: "/userprofile" },
        { name: "Settings", path: "/privacysetting" },
        { name: "Logout", path: "/" }
    ]
    
    const menuRef = useRef();
    const imgRef = useRef();
    const navigate = useNavigate();


    window.addEventListener('click', (e) => {
        if(e.target !== menuRef.current && e.target !== imgRef.current ){
            setOpen (false);
        }
    })

    const handleMenuClick = (path) => {
        setOpen(false);
        navigate(path);
    };
    return (
        <div className='navbarContainer container-fluid p-0 d-flex justify-content-center align-items-center'  >
            <div className='navComponent'>
                <Link ><FontAwesomeIcon className='navIconHeader' icon={faShopware}  to={'/home'}/></Link> 
                <input className='btnNavSearch' type='text' placeholder='search' />
                <button className='btnNavHeader '>Submit</button>
                
             
                <Link  className='iconNavRight' to={'/cart'}><FontAwesomeIcon  icon={faCartShopping} /></Link>
                <Link to={'/orderHistory'}  className='iconNavRight' ><FontAwesomeIcon  icon={faBell} /></Link>
                <Link  className='iconNavRight'>
                    <i className=" bi-person-circle"ref={imgRef} onClick={() => setOpen(!open)}></i>
                </Link> 
            </div>
            {
                open && (
                    <div ref={menuRef} className='menuComponent'>
                    <ul>
                        {
                            menu.map((menu) =>(
                                <li  key={menu} className='menuList'
                                onClick={() => handleMenuClick(menu.path)}
                                >{menu.name}</li>
                            ))
                        }
                    </ul>
                    
                    </div>
                )
           }
           
        </div>
    )
}

export default Navbar