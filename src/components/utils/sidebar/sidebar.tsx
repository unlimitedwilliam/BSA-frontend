import React, { useEffect, useState } from "react";
import sideBarItems from "../../../configs/sideBarItems";
import { Link, useLocation } from "react-router-dom";
import './sidebar.scss';
import { AiOutlineMenu } from "react-icons/ai";

const Sidebar: React.FC = () => {
    
    const [ activeIndex, setActiveIndex ] = useState<number>(0);
    const location = useLocation();

    useEffect(() => {
        const currentPath = window.location.pathname.split('/')[1]
        const activeItem = sideBarItems.findIndex(item => item.section === currentPath)

        setActiveIndex(currentPath.length === 0 ? 0 : activeItem) 
    }, [location])

    return (
        <div className="sidebar">
            <div className="sidebar__menu">
                <div className="sidebar__menu__icon">
                    <AiOutlineMenu/>
                </div>
                <div className="sidebar__menu__text">
                    Menu
                </div>
            </div>
            {
                sideBarItems.map((nav, index) => (
                    <Link to={nav.link} key={`nav-${index}`} className={`sidebar__item 
                    ${activeIndex === index && 'active'}`}>
                        <div className="sidebar__item__icon">{nav.icon}</div>
                        <div className="sidebar__item__text">{nav.text}</div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Sidebar;