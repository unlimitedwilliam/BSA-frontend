import React from 'react'
import './Box.scss';

import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const color = '#0F3D3E';

const Box: React.FC<any> = ({item}) => {
  return (
    <div className='summary-box'>
      <div className="summary-box__info">
        <div className="summary-box__info__title">
          <p>{item.title}</p>
          <span>{item.subtitle}</span>
        </div>
        <div className="summary-box__info__value">
          {item.value}
        </div>
      </div>
      <div className="summary-box__chart">
        <CircularProgressbarWithChildren 
          value = {item.percent}
          strokeWidth={10}
          styles = {buildStyles({
            pathColor: color,
            trailColor: 'transparent',
            strokeLinecap: 'round'
          })}
        >
          <div className="summary-box__chart__value">
            {item.percent}%
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  )
}

export default Box