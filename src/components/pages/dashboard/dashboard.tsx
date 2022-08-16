import React from 'react';
import data from '../../../configs/data';
import { Overall } from '../../../models/Overall';
import { Summary } from '../../../models/Summary';
import Box from '../../utils/Box/Box';
import MonthlyRevenue from '../../utils/MonthlyRevenueChart/MonthlyRevenue';
import OverallReport from '../../utils/OverallReport/OverallReport';
import './dashboard.scss';
import { MdOutlineQueryStats } from "react-icons/md"

const Dashboard: React.FC = () => {
  return (
    <div className='dashboard'>
        <div className="heading">
          <MdOutlineQueryStats/>
          <h1>Dashboard</h1>
        </div>
        <div className="summary-row">
          <div className="summary-left">
            {
              data.summary.map((item: Summary, index: number) => (
                <div key={`summary-${index}`}>
                  <Box item={item}/>
                </div>
              ))
            }
          </div>
          <div className="summary-right">
            {
              data.overall.map((item: Overall, index: number) => (
                <li className="overall__item" key={`overall-${index}`}>
                  <OverallReport item={item} index={index}/>
                </li>
              ))
            }
          </div>
        </div>
        <div className='summary-chart'><MonthlyRevenue/></div>
    </div>
  );
}

export default Dashboard;
