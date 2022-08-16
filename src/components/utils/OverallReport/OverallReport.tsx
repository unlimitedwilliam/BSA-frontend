import React from 'react';
import './OverallReport.scss';
import { BiReceipt, BiUser, BiCube, BiDollar } from 'react-icons/bi';

const icons = [
    <BiReceipt/>,
    <BiUser/>,
    <BiCube/>,
    <BiDollar/>
  ]

const OverallReport: React.FC<any> = ({item, index}) => {
  return (
    <div className='overall__item'>
        <div className="overall__item__icon">
            {icons[index]}
        </div>
        <div className="overall__item__info">
            <div>{item.value}</div>
            <div>{item.title}</div>
        </div>
    </div>
  )
}

export default OverallReport