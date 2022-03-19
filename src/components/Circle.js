import React from 'react';
import { Chart } from 'primereact/chart';

const Circle = ({ chartData, labelNumber, labelTitle }) => {
  let defaultData = {
    datasets: [
      {
        data: [1],
        backgroundColor: ['#c3c5c5'],
        hoverBackgroundColor: ['#c3c5c5'],
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: false,
      },
    },

    responsive: true,
    cutout: '85%',
    maintainAspectRatio: true,
  };

  return (
    <div className='progress-bar'>
      <Chart
        height='50px'
        width='100px'
        className='chart'
        type='doughnut'
        data={chartData ? chartData : defaultData}
        options={options}
        style={{ position: 'relative' }}
      />
      <div className='label'>
        <span className='label-number'>{labelNumber ? labelNumber : '0'}</span>
        <span className='label-title'>{labelTitle}</span>
      </div>
    </div>
  );
};

export default Circle;
