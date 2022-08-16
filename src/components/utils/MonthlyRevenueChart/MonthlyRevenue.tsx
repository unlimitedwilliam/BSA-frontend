import React from "react";
import { Bar } from "react-chartjs-2";
import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
 } from 'chart.js';
 import data from '../../../configs/data'

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
)

const color = '#E2DCC8';

const MonthlyRevenue = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
      scales: {
        xAxes: {
          grid: {
            display: false,
            drawBorder: false
          }
        },
        yAxes: {
          grid: {
            display: false,
            drawBorder: false
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: false
        }
      },
      elements: {
        bar: {
          backgroundColor: color,
          borderRadius: 12
        }
      }
    } 

  const chartData = {
    labels: data.revenueByMonths.labels,
    datasets: [
        {
            label: 'Revenue',
            data: data.revenueByMonths.data
        }
    ]
}

  return (
    <>
      <div className="chart-title">
        Revenue by months
      </div>
      <div>
        <Bar options={options} data={chartData} height={'300px'}/>
      </div>
    </>
  )
}

export default MonthlyRevenue