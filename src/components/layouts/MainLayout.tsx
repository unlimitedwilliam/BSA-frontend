import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../utils/sidebar/sidebar';
import './main-layout.scss';

const MainLayout: React.FC = () => {
  return (
    <div className='main'>
        <Sidebar/>
        <div id='content' className='main__content'>
          <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout