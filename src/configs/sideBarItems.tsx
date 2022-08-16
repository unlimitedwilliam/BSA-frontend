import { AiFillHome } from "react-icons/ai";
import { MdDashboard } from "react-icons/md"; 
import { BiBookAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";

const sideBarItems: any[] = [
    {
        link: '/',
        section: 'home', 
        icon: <AiFillHome/>,
        text: 'Home'
    },
    {
        link: 'dashboard',
        section: 'dashboard',
        icon: <MdDashboard/>,
        text: 'Dashboard'
    },
    {
        link: 'products',
        section: 'products',
        icon: <BiBookAlt/>,
        text: 'Products'
    },
    {
        link: '/login',
        section: '/authorization',
        icon: <AiOutlineUser/>,
        text: 'User'
    }
]

export default sideBarItems;