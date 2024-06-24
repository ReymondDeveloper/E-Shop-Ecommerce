import React, { useState } from 'react';
import "../pagesStyle/Setting.css";

const Setting = () => {
    const itemSetting = [
        {
            "title": "My Account",
            "icon": <i className="bi bi-person-gear "></i>,
            "childrens": [
                {
                    "title": "Profile",
                    "icon": <i className="bi bi-pencil-square"></i>,
                    "path": "/userProfile"
                },
                {
                    "title": "Address",
                    "icon": <i className="bi bi-geo-alt"></i>,
                    "path": "/address",
                },
                {
                    "title": "Privacy",
                    "icon": <i className="bi bi-shield-lock"></i>,
                    "path": "/password"
                }
            ]
        },
        {
            "title": "Payment   ",
            "icon": <i className="bi bi-view-list"></i>,
            "childrens": [
                {
                    "title": "Banks & Cards",
                    "path": "/paymentmethod"
                }
            ]
        },
        {
            "title": "Setting",
            "icon": <i className="bi bi-gear"></i>,
            "childrens": [
                {
                    "title" : "Privacy Settings",   
                    "icon": <i className="bi bi-question-circle-fill"></i>,
                    "path" : "/"
                }
            ]    
        },
        {
            "title": "Report Bug",
            "icon": <i className="bi bi-bug"></i>,
            "path": "/report-bug"
        }
    ];

    const [openItems, setOpenItems] = useState({});

    const toggleItem = (index) => {
        setOpenItems(prevState => ({ ...prevState, [index]: !prevState[index] }));
    };

    return (
        <>
        {/* <Navbar/> */}
        <div className='settingMainContainer p-0 '>
            <div className='settingContainer'>
                {itemSetting.map((item, index) => (
                    <div key={index} className={`sidebar-item ${openItems[index] ? "open" : ""}`}>
                        <div className='sidebar-title' onClick={() => toggleItem(index)}>
                            <span className='spanIcon'>
                                {item.icon}
                                {item.title}
                            </span>
                            <i className={`toggle-btn bi ${openItems[index] ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
                        </div>
                        {item.childrens && (
                            <div className='sidebar-content'>
                                {item.childrens.map((child, idx) => (
                                    <div key={idx} className='sidebar-subitem'>
                                        {child.icon}
                                        <a href={child.path}>{child.title}</a>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
           
            </div>
        </div>
        </>
    );
};

export default Setting;
